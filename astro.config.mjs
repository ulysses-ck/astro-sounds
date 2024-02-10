import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [astroI18next(), tailwind(), react()],
	server: {
		host: true,
	},
	output: "server",
	adapter: vercel({
		includeFiles: [
			"./public/locales/en/translation.json",
			"./public/locales/es/translation.json",
		],
	}),
});
