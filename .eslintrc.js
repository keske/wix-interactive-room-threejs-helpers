module.exports = {
  env: {
    es6: true,
    node: true,
  },
  "globals": {
    "document": true,
    "window": true,
  },
  "parser": "babel-eslint",
    "extends": "airbnb/base",
    "rules": {
      "arrow-parens": ["error", "always"],
      "function-paren-newline": ["error", { "minItems": 3 }],
      "implicit-arrow-linebreak": 0,
      "function-paren-newline": 0,
      "no-underscore-dangle": 0,
      "no-console": 0,
      "max-len": ["error", { "code": 80 }],
      "padded-blocks": 0,
      "react/jsx-sort-props": [1],
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/react-in-jsx-scope": 1
    },
    "plugins": [
      "babel",
      "flowtype",
      "import",
      "react"
    ],
};