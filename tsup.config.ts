import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["utils/**"],
  dts: true,
  format: ["cjs", "esm"],
  outDir: "dist",
  clean: true,
  splitting: false,
});
