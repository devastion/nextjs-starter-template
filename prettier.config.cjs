/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 80,
  proseWrap: "always",
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: "ignore",
};
