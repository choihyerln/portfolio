import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier"; // Prettier 플러그인 추가

export default tseslint.config(
  {
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**"],
  },
  tseslint.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          useTabs: false,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  }
);
