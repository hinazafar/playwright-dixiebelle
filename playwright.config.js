// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://dixiebellepaint.com',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});
