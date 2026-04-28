# 🌐 WebCloner — Advanced Website Cloning Tool

Clone any public website into a fully offline-ready bundle with a single click.

---

## ✨ Features

- **Full rendering** via Puppeteer (handles JS-heavy sites: Shopify, WordPress, SPAs)
- **Asset extraction**: CSS, JS, images (jpg/png/svg/webp), fonts (woff/woff2/ttf)
- **Offline-ready HTML**: all paths rewritten for local access
- **CSS bundler**: all stylesheets combined into `/css/style.css`
- **JS bundler**: all scripts combined into `/js/script.js`
- **Lazy-load handling**: auto-scrolls page to trigger lazy images
- **Minify toggle**: CleanCSS + Terser compression
- **Beautify toggle**: Formatted HTML/CSS/JS output
- **Tracker removal**: Optional stripping of GA, GTM, Facebook Pixel, etc.
- **Multi-page crawl**: Follow internal links (up to 10 pages)
- **ZIP download**: One-click bundle download
- **Real-time WebSocket logs**: Live progress in the dashboard
- **Parallel downloads**: Up to 8 concurrent asset downloads with retry

---

## 📁 Output Structure

```
output/{project-name}/
├── index.html          ← cleaned, relinked HTML
├── css/
│   └── style.css       ← all CSS bundled here
├── js/
│   └── script.js       ← all JS bundled here
├── images/
│   └── *.jpg/png/...   ← all downloaded images
├── fonts/
│   └── *.woff2/...     ← all downloaded fonts
└── stats.json          ← summary of what was downloaded
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Chrome/Chromium installed (the app uses system Chromium)

### Steps

```bash
# 1. Clone or extract the project
cd webclonerapp

# 2. Install dependencies
PUPPETEER_SKIP_DOWNLOAD=true npm install

# 3. Start the server
npm start
# Server runs at http://localhost:3000

# 4. Open your browser
open http://localhost:3000
```

### If Chrome is not found

Edit `src/cloner.js` and update the `executablePath`:

```js
executablePath: '/path/to/your/chrome',
// Linux: '/usr/bin/google-chrome' or '/usr/bin/chromium-browser'
// macOS: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
// Windows: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
```

Or install Puppeteer with bundled Chrome:
```bash
npm install puppeteer  # (without PUPPETEER_SKIP_DOWNLOAD)
```

---

## 🎮 Usage

1. Open `http://localhost:3000`
2. Paste any public website URL (e.g., `https://example.com`)
3. Choose your options:
   - **Multi-page**: crawl internal links (up to 10 pages)
   - **Minify**: compress CSS/JS output
   - **Beautify**: format HTML for readability
   - **Remove trackers**: strip GA, GTM, Facebook Pixel, etc.
4. Click **Clone Website**
5. Watch the live logs and stats update in real-time
6. Click **Download ZIP** when complete

---

## ⚙️ Configuration

| Option | Default | Description |
|--------|---------|-------------|
| Multi-page | off | Follow internal links up to 10 pages |
| Minify | off | Compress CSS (CleanCSS L2) + JS (Terser) |
| Beautify | on | Format HTML/CSS/JS for readability |
| Remove trackers | on | Strip analytics/ad scripts |

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/clone` | Start a clone job |
| `GET`  | `/download/:projectName` | Download ZIP bundle |
| `GET`  | `/stats/:projectName` | Get clone statistics |
| `WS`   | `/` | WebSocket for live progress |

### POST /clone body:
```json
{
  "url": "https://example.com",
  "sessionId": "uuid-from-websocket",
  "multiPage": false,
  "minify": false,
  "beautify": true,
  "removeTrackers": true
}
```

---

## ⚠️ Limitations

- Some sites block headless browsers (Cloudflare, Captcha, etc.)
- CORS-blocked assets won't download (noted in logs)
- Dynamic SPAs may need extra render time
- Password-protected pages require credentials
- Rate-limited sites may fail on some assets

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Browser | Puppeteer (Chromium) |
| HTML Parsing | Cheerio |
| HTTP | Axios |
| CSS Minify | CleanCSS |
| JS Minify | Terser |
| Formatting | js-beautify |
| Server | Express.js |
| Real-time | WebSocket (ws) |
| ZIP | Archiver |
| File I/O | fs-extra |

---

## 📄 License

MIT — use freely, attribution appreciated.


## Latest Fix: Click Functionalities in Cloned Websites

This build preserves JavaScript interactions more safely:

- External and inline JS files are saved separately instead of being merged into one bundle.
- Original script loading order is preserved.
- `type="module"`, `defer`, `async`, and `nomodule` attributes are kept.
- Required plugin/CDN dependencies are not silently removed.
- Bootstrap/Webflow/Owl/Slick/Swiper-style `data-*` attributes are preserved.
- A small fallback file `js/clone-interactions-fix.js` is added to help common accordions, mobile menus, and basic slider arrows work when original delegated handlers fail.

Recommended settings: keep **Remove Trackers** off while testing a clone. Some websites mix tracking and initialization scripts, and aggressive removal can break UI behavior.
