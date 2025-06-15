import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const reactConfig: Linter.Config = {
  files: ['**/*.{jsx,tsx}'],
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'react-refresh': reactRefresh
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
};

const configs: Linter.Config[] = [
  reactConfig
];

export default configs;
