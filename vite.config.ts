import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // because you're deployed at root
  plugins: [react()],
});
