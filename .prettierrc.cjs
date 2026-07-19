/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	...require("@migan/prettier-config"),
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/app.css",
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
		{
			files: ".github/workflows/*.yml",
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

module.exports = config;
