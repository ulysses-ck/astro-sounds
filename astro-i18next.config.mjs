/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en",
	locales: ["en", "es"],
	load: ["server", "client"],
	i18nextServer: {
		debug: true,
		backend: {
			loadPath: "./public/locales/{{lng}}/{{ns}}.json",
		},
	},
	i18nextClient: {
		debug: true,
		backend: {
			loadPath: "./locales/{{lng}}/{{ns}}.json",
		},
	},
	i18nextServerPlugins: {
		"{initReactI18next}": "react-i18next",
	},
	i18nextClientPlugins: {
		"{initReactI18next}": "react-i18next",
	},
};
