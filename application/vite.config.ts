import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      interface: path.resolve(__dirname, "./interface"),
      domain: path.resolve(__dirname, "./domain"),
      infrastructure: path.resolve(__dirname, "./infrastructure"),
    },
  },
});
