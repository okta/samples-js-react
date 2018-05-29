module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  "root": true,
  "rules": {
    "strict": "off",
    "max-len": ["error", 200],
    "react/prop-types": "off",
    "react/prefer-stateless-function": [0],
    // windows linebreaks when in windows environment FTW
    "linebreak-style": ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")]
  }
}
