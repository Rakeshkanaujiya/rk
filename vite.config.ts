import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), viteStaticCopy({
      targets: [
        {
          src: 'public/404.html', // file you want to copy to dist
          dest: '.' // root of dist folder
        }
      ]
    }), mode === "development" && componentTagger()].filter(Boolean),
  base:'/rk/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
