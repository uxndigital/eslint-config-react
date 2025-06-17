# @uxndigital/eslint-config-react

A shared ESLint configuration for React projects at UXN Digital.

## Installation

```bash
npm install --save-dev @uxndigital/eslint-config-react eslint@9.x.x
```

## Usage

Add the following to your `eslint.config.js`:

```js
import reactConfig from '@uxndigital/eslint-config-react';

export default [
  ...reactConfig
]
```

## Peer Dependencies

This package requires the following peer dependencies:

- `eslint` (version 9.x.x)

## Included Plugins

This configuration includes the following ESLint plugins:

- `eslint-plugin-react` - React specific linting rules
- `eslint-plugin-react-hooks` - Rules for React Hooks
- `eslint-plugin-react-refresh` - Rules for React Fast Refresh

## License

MIT © UXN Digital 