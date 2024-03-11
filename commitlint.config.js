module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0, 'always', 'pascal-case'],
    'body-max-line-length': [2, 'always', 300], // Body lines should not exceed 300 characters
    'footer-max-line-length': [2, 'always', 300], // Footer lines should not exceed 300 characters
    'footer-leading-blank': [2, 'always'],
  },
};
