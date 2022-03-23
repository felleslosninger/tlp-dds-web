module.exports = {
  ignoreFiles: ['./packages/**/build/**'],
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/operator-no-newline-after': null,
    'scss/at-rule-no-unknown': true,
  },
}
