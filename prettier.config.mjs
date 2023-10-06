/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  semi: true,
  importOrder: ['^astro/(.*)$', '^@xata/(.*)$', '^@astrojs/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
