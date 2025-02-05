import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tsParser from '@typescript-eslint/parser'; // TypeScript 파서
import prettierPlugin from 'eslint-plugin-prettier';  // Prettier 플러그인 추가
import react from 'eslint-plugin-react'           // React 규칙
import importPlugin from 'eslint-plugin-import'    // import/export 규칙
import tailwindcss from 'eslint-plugin-tailwindcss' // Tailwind CSS 규칙


export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:prettier/recommended", // Prettier 설정 추가
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser, // typescript 파서
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        React: "readonly", // 리액트를 전역 변수로 설정 (읽기 전용)
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "prettier": prettierPlugin,  // Prettier 코드 포맷팅
      "react": react,              // React 규칙
      "import": importPlugin,      // import 순서 및 규칙
      "tailwindcss": tailwindcss   // Tailwind CSS 규칙
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "error", // prettier의 포맷팅 에러를 eslint 에러 리포팅으로 볼 수 있도록 하는 규칙
      "tailwindcss/no-custom-classname": "off"  // 커스텀 클래스명 허용
    },
  },
);
