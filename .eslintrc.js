module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 2019,
    parser: 'babel-eslint',
    sourceType: 'module',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },

  plugins: ['vue'],

  rules: {
    'prettier/prettier': 'error',
    // 'max-len': ['error', { code: 100, ignoreUrls: true }],
  },
}
