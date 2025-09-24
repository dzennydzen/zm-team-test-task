import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/node_modules/',
      'dist/',
      '*.config.js',
      '**/temp/*'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'off',
      'no-unused-expressions': 'off',
      'no-undef': 'error',
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      'indent': 'off',
      'semi': ['error', 'always'],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'no-irregular-whitespace': 'error'
    }
  }
];