# vite-backbone

> 📦 Starter template for Backbone.js apps using Vite, Bootstrap 5, Handlebars, jQuery, and Underscore.

[![Vite](https://img.shields.io/badge/Vite-^7.0-blueviolet?logo=vite)](https://vitejs.dev/)
[![Backbone.js](https://img.shields.io/badge/Backbone.js-^1.6-blue?logo=javascript)](https://backbonejs.org/)
[![License: MIT-0](https://img.shields.io/badge/License-MIT--0-yellow.svg)](LICENSE)

---

## 🚀 Features

- ✅ Backbone Views, Models, Collections, and Routers
- 🎨 Bootstrap 5 layout & styling
- 📝 Handlebars.js for logic-less templating
- ⚡ Vite for modern development and lightning-fast builds
- 🧪 Unit testing with Vitest
- 📏 Oxlint pre-configured for common globals
- 🌐 Globals for `$`, `_`, `Backbone`, `Handlebars`
- 🔧 Easily configurable and extendable

---

[![vite-backbone screenshot](https://github.com/lfortin/vite-backbone/blob/main/public/screenshot.png?raw=true)](https://github.com/lfortin/vite-backbone/blob/main/public/screenshot.png?raw=true)

Try it out online:
👉 [Live Demo](https://lfortin.github.io/vite-backbone-demo)

---

## 📂 Template Structure

```text
├── index.html          # Main app page
├── index-cdn.html      # CDN-specific app page
├── public/             # Static assets
├── src/
│   ├── collections/    # Backbone Collections
│   ├── data/           # Static data files
│   ├── models/         # Backbone Models
│   ├── routers/        # Backbone Routers
│   ├── styles/
│   │   └── style.scss  # Custom styles
│   ├── views/          # Backbone Views
│   ├── main.js         # App entry point & Router init
│   └── main-cdn.js     # App entry point for CDN-specific build
└── tests/              # Unit tests
```

## 🛠️ Usage

### 1. Clone & Install

```bash
git clone https://github.com/lfortin/vite-backbone.git
cd vite-backbone
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### Using CDN links for external dependencies

```bash
npm run dev:cdn
npm run build:cdn
```

## 🧪 Running Tests

This project uses [Vitest](https://vitest.dev/) for unit testing.

To run all tests:

```bash
npm run test
```

---

## 📏 Linting Code

This project uses [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) with a modern configuration tailored for Backbone, Handlebars, jQuery, Underscore and Vitest.

To run the linter:

```bash
npm run lint
```

---

## 📄 License

MIT-0 © [lfortin](https://github.com/lfortin)
