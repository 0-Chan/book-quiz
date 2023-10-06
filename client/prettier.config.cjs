module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  importOrder: [
    "^react/(.*)$",
    "^@heroicons/(.*)$",
    "^@/component/(.*)$",
    "^@/hooks/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
