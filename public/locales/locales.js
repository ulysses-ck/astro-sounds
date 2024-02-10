import enTranslations from "./en/translation.json" assert { type: "json" };
import esTranslations from "./es/translation.json" assert { type: "json" };

const locales = {
	en: {
		translation: enTranslations,
	},
	es: {
		translation: esTranslations,
	},
};
export default locales;
