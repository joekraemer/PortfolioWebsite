import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from a GitHub Pages project page, so assets live under /PortfolioWebsite/.
  base: '/PortfolioWebsite/',
  build: {
    // Match CRA's default output dir name so existing tooling/expectations hold.
    outDir: 'build',
  },
  // This project keeps JSX in .js files (CRA convention). Tell esbuild to parse
  // .js as JSX during dependency pre-bundling and the build so we don't have to
  // rename every component file.
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
