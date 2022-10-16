module.exports = {
  "*.md": "markdown-link-check",
  "*.{yml,yaml}": "yamllint",
  "*.ts?(x)": "eslint --cache --fix",
  "*": ["ls-lint", "prettier -uw --cache"],
};
