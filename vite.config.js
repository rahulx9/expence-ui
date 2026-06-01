import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log('Vite build — mode:', mode);
  console.log('Loaded env VITE_APP_TITLE:', env.VITE_APP_TITLE);
  console.log('Loaded env VITE_API_URL:', env.VITE_API_URL);

  const base = process.env.NODE_ENV === 'production' ? '/expence-ui/' : '/';
  console.log('Computed base:', base);

  return {
    base,
    plugins: [react()]
  };
});
