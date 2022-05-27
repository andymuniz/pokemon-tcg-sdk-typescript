import path from "path";
import { defineConfig } from "vite";

// Use Library Mode https://vitejs.dev/guide/build.html#library-mode

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "PokemonTcgClient",
      fileName: (format) => `pokemon-tcg-client.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
});
