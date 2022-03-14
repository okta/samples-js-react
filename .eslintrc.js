// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: [
    'import',
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],
  rules: {
    'react/prop-types': 0
  },
  env: {
    node: true,
    browser: true
  },
  settings: {
    'react': {
      'version': '16.8',
    }
  },
  overrides: [
    {
      files: [
        '**/*.test.jsx'
      ],
      env: {
        jest: true
      },
      rules: {
        'react/display-name': 0
      }
    }
  ]
}
