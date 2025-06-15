# @uxndigital/eslint-config-react

A shared ESLint configuration for React projects at UXN Digital. This configuration extends the recommended settings from ESLint's React plugins and includes additional rules for modern React development.

## Installation

```bash
pnpm add -D @uxndigital/eslint-config-react eslint@8.x.x
```

## Usage

Add the following to your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["@uxndigital/eslint-config-react"]
}
```

## Features

This configuration includes:

- React recommended rules (`eslint-plugin-react`)
- React Hooks rules (`eslint-plugin-react-hooks`)
- React Refresh rules (`eslint-plugin-react-refresh`)
- Automatic React version detection
- Global React and JSX definitions

## Configuration Details

The configuration:
- Extends `plugin:react/recommended` and `plugin:react-hooks/recommended`
- Disables prop-types checking (`react/prop-types: 'off'`)
- Disables exhaustive deps checking (`react-hooks/exhaustive-deps: 'off'`)
- Enables React Refresh with constant exports allowed
- Sets up global React and JSX definitions

## Peer Dependencies

- `eslint`: ^8.x.x

## License

MIT 