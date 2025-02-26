<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ Import path module
import tailwindcss from '@tailwindcss/vite';

=======
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
>>>>>>> b6d1e9099b0299ad9e07df15e88d125ad4359d1b
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // React should be first in plugins
    tailwindcss(),
  ],
  resolve: {
    alias: {
<<<<<<< HEAD
      "@": path.resolve(__dirname, "./src"), // Fix: path is now defined
    },
  },
});
=======
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
>>>>>>> b6d1e9099b0299ad9e07df15e88d125ad4359d1b
