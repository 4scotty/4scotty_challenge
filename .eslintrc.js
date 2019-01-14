module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-vars': 1,
    'react/prop-types': [1, { ignore: ['children'] }],
    'import/no-unresolved': 'off',

    semi: [2, 'never'],
    'key-spacing': 1,
    curly: 0,
    'consistent-return': 0,
    'space-infix-ops': 1,
    camelcase: 0,
    'no-spaced-func': 1,
    'no-alert': 1,
    'eol-last': 1,
    'comma-spacing': 1,
    eqeqeq: 1,
    'no-var': 'error',

    // possible errors
    'comma-dangle': [2, 'never'],
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'valid-typeof': 2,
    'no-redeclare': 2,

    'init-declarations': 2,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 0
  }
}
