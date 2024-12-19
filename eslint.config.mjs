import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextEslintPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", 
    "next/typescript"
    
  ),
  {
    plugins: {
      '@next/next': nextEslintPlugin,
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      // ... any other existing rules ...
    },
  },
];

export default eslintConfig;
