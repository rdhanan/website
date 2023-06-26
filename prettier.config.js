/** @type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const importConfig = {
  // TODO: refine import order
  importOrder: [
    "",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[.]",
  ],
};

const prettierConfig = {
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  useTabs: false,
  printWidth: 80,
};

module.exports = {
  ...importConfig,
  ...prettierConfig,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};