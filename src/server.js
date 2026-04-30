/**
 * Website Cloner Tool - Main Server
 * Node.js + Express + WebSocket backend
 */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const cloner = require('./cloner');

const app = express(); 
const server = http.createServer(app);

// WebSocket server for real-time progress updates
const wss = new WebSocket.Server({ server });

// Store active sessions: sessionId -> ws client
const sessions = new Map();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// WebSocket connection handler
wss.on('connection', (ws) => {
  const sessionId = uuidv4();
  ws.sessionId = sessionId;
  sessions.set(sessionId, ws);

  // Send sessionId to client
  ws.send(JSON.stringify({ type: 'session', sessionId }));

  ws.on('close', () => {
    sessions.delete(sessionId);
  });
});

// Helper: send progress update to a session
function sendProgress(sessionId, data) {
  const ws = sessions.get(sessionId);
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(data));
  }
}

// POST /clone - Start cloning a website
app.post('/clone', async (req, res) => {
  const { url, sessionId, multiPage, minify, beautify, removeTrackers } = req.body;

  if (!url || !sessionId) {
    return res.status(400).json({ error: 'URL and sessionId are required' });
  }

  // Validate URL
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('Invalid protocol');
    }
  } catch {
    return res.status(400).json({ error: 'Invalid URL. Please provide a valid http/https URL.' });
  }

  const projectName = parsedUrl.hostname.replace(/\./g, '_') + '_' + Date.now();
  const outputDir = path.join(__dirname, '../output', projectName);

  // Acknowledge immediately
  res.json({ success: true, projectName });

  // Run cloner async
  try {
    await cloner.clone({
      url,
      outputDir,
      projectName,
      multiPage: !!multiPage,
      minify: !!minify,
      beautify: !!beautify,
      removeTrackers: !!removeTrackers,
      onProgress: (data) => sendProgress(sessionId, data),
    });

    sendProgress(sessionId, {
      type: 'complete',
      projectName,
      downloadUrl: `/download/${projectName}`,
    });
  } catch (err) {
    sendProgress(sessionId, {
      type: 'error',
      message: err.message || 'Cloning failed. The website may be blocking automated access.',
    });
  }
});

// GET /download/:projectName - Download ZIP
app.get('/download/:projectName', async (req, res) => {
  const { projectName } = req.params;
  const outputDir = path.join(__dirname, '../output', projectName);
  const zipPath = path.join(__dirname, '../output', `${projectName}.zip`);

  if (!await fs.pathExists(outputDir)) {
    return res.status(404).json({ error: 'Project not found' });
  }

  const archiver = require('archiver');
  const archive = archiver('zip', { zlib: { level: 9 } });
  
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${projectName}.zip"`);
  
  archive.pipe(res);
  archive.directory(outputDir, projectName);
  await archive.finalize();
});

// GET /stats/:projectName - Get project statistics
app.get('/stats/:projectName', async (req, res) => {
  const statsPath = path.join(__dirname, '../output', req.params.projectName, 'stats.json');
  try {
    const stats = await fs.readJson(statsPath);
    res.json(stats);
  } catch {
    res.status(404).json({ error: 'Stats not found' });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});