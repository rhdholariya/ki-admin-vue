// ESLint flat config for Vue 3 + Vite project (JavaScript only)
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  // Ignore generated and vendor directories
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // Vue plugin with strongly recommended rules for Vue 3
  ...vue.configs['flat/essential'],

  {
    files: [
      '**/*.js',
      '**/*.vue',
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: false },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // You can tweak these defaults to your team's preferences
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
];


