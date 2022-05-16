module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended" // eslint-plugin-prettier 을 여기에서 미리 설치해줌 (prettier config가 다른 formatting rule을 override 하게 해주는 것)
  ],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": [
      'error',
      {
        "printWidth": 80,
        "singleQuote": true,
        "trailingComma": "es5",
        "tabWidth": 8 // test를 위해서 8로 해둠
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
