import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";

export default [
  {
    ignores: [".next/", "out/", "next-env.d.ts"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },
  ...tseslint.config({
    plugins: {
      "react-hooks": fixupPluginRules(reactHooks),
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  }),
  ...tseslint.configs.recommended,
  tseslint.configs.eslintRecommended,
];
