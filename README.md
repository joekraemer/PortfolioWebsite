# Portfolio Website

Personal portfolio site, built with [Vite](https://vite.dev/) + React and
deployed to GitHub Pages.

**Live site:** https://joekraemer.github.io/PortfolioWebsite

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module reload.\
Open the printed `http://localhost:5173/PortfolioWebsite/` URL to view it.

### `npm run build`

Builds the app for production into the `build/` folder (minified, hashed
filenames). The `base` path is set to `/PortfolioWebsite/` so assets resolve
correctly under the GitHub Pages project sub-path.

### `npm run preview`

Serves the production build locally to sanity-check it before deploying.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages automatically. The Pages source must be
set to **GitHub Actions** (repo Settings → Pages → Build and deployment).

### Routing note

The app uses `react-router-dom` with `BrowserRouter`. GitHub Pages has no
server-side SPA fallback, so `public/404.html` plus a small decode snippet in
`index.html` (the [spa-github-pages](https://github.com/rafgraph/spa-github-pages)
technique) redirect deep links and refreshes back into the app.
