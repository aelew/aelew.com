/** @type {import("prettier").Options} */
const config = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  trailingComma: 'none',
  singleQuote: true
};

module.exports = config;
