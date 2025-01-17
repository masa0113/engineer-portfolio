import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// ESM 環境用の設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESM に対応する import を使用
import prettierPlugin from "eslint-plugin-prettier";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const eslintConfig = [
  // ベース設定（Next.js + TypeScript）
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // プラグインの設定
  {
    plugins: {
      prettier: prettierPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      // Prettier のエラーを ESLint に統合
      "prettier/prettier": "error",
      // Tailwind CSS のクラス順警告
      "tailwindcss/classnames-order": "warn",
    },
  },

  // ファイルの対象設定
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // 未使用変数の警告
    },
  },

  // Tailwind CSS の設定
  {
    settings: {
      tailwindcss: {
        callees: ["clsx", "classnames"],
        config: "./tailwind.config.js", // Tailwind 設定ファイル
      },
    },
  },
];

export default eslintConfig;
