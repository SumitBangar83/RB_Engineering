import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    import('@tailwindcss/aspect-ratio'),
  tailwindcss({
     theme: {
        extend: {
          colors: {
            primary: '#1e3a8a',     // Deep Blue
            accent: '#fbbf24',      // Golden Yellow
            dark: {
              100: '#374151',       // Dark Gray
              200: '#111827'        // Almost Black
            },
            light: '#f9fafb'        // Light Gray
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
  })
  ],
})
