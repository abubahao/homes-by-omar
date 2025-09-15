// The PostCSS configuration for Tailwind CSS. Starting with Tailwind CSS v4,
// the PostCSS plugin has moved to a separate package `@tailwindcss/postcss`.
// See: https://tailwindcss.com/docs/installation/framework-guides/nextjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};