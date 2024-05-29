module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0,
    'global-require': 0,
    'vue/no-template-shadow': 0,
    quotes: [2, 'single'],
    'comma-spacing': [2, { before: false, after: true }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    semi: ['error', 'always']
  }
};
