import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    Pages(),
  ],
  define: {
    'process.env': process.env
  }
})


// export default ({ mode }) => {
//     // Load app-level env vars to node-level env vars.
//     process.env = {...process.env, ...loadEnv(mode, process.cwd())};

//     return defineConfig({
//       // To access env vars here use process.env.TEST_VAR
//       plugins: [
//         react(),
//         Pages(),
//       ],
//       define: {
//         'process.env': process.env
//       }
//     });
// }
