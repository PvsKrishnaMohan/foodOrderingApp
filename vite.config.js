import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test functions like `test` and `it`
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './setupTests.js', // Corrected path
  }
})
