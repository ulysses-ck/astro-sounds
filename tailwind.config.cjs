/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"darker-primary": "#001D1F",
				"darker-secondary": "#0F494D",
				"darker-information": "#337C80",
				"darker-alert": "#6BAFB3",
				"darker-error": "#c05311",
				"darker-succes": "#114211",
			},
		},
	},
	plugins: [],
};
