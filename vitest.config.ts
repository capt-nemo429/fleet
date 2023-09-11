import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "_test-vectors": "./packages/_test-vectors/"
    }
  },
  test: {
    useAtomics: true,
    threads: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      lines: 100,
      statements: 100,
      branches: 100,
      functions: 100,
      thresholdAutoUpdate: true,
      exclude: ["**/*.spec.ts"]
    }
  }
});
