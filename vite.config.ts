import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import glsl from "vite-plugin-glsl";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [mdx(), tailwindcss(), reactRouter(), netlifyReactRouter(), glsl()],
  resolve: {
    tsconfigPaths: true,
  },
});
