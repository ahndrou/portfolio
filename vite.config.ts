import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), netlifyReactRouter(), glsl()],
  resolve: {
    tsconfigPaths: true,
  },
});
