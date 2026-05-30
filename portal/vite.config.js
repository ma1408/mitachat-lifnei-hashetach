import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base יחסי כדי שיעבוד גם תחת תת-נתיב ב-GitHub Pages
// (למשל /mitachat-lifnei-hashetach/portal/). הניווט מבוסס HashRouter.
export default defineConfig({
  base: './',
  plugins: [react()],
})
