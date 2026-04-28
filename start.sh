#!/bin/bash
echo "🌐 Starting WebCloner..."
echo "→ http://localhost:3000"
PUPPETEER_SKIP_DOWNLOAD=true node src/server.js
