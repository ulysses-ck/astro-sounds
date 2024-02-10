import locales from "./public/locales/locales.js";

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en",
	locales: ["en", "es"],
	load: ["server", "client"],
	i18nextServer: {
		resources: locales,
	},
	i18nextClient: {
		backend: {
			resources: locales,
		},
	},
	i18nextServerPlugins: {
		"{initReactI18next}": "react-i18next",
	},
	i18nextClientPlugins: {
		"{initReactI18next}": "react-i18next",
	},
};
