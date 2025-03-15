import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/

export default defineConfig({
  build: {
    outDir: 'build', // Ensure this is set to 'build' or the desired output directory
  },
});
