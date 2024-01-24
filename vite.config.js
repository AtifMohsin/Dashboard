import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    port : 3000,
  },
  build: {
    rollupOptions: {
      external: ['@iconscout/react-unicons', 'react-apexcharts','@mui/material/Table','@mui/material/TableBody','@mui/material/TableCell','@mui/material/TableContainer',
    '@mui/material/TableHead','@mui/material/TableRow','@mui/material/Paper' ],
    },
  },
})

