import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    htmlPurge(),
  ],
  build: {
    rollupOptions: {
      input: {
        // Define your entry points here
        index: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'signup.html'),
        countdown: resolve(__dirname, 'js/countdown.js'),
        form: resolve(__dirname, 'js/form.js'), 
      }
    }
  }
});
