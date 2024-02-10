import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Nav() {
	const { t } = useTranslation("translation");

	const languages = {
		en: t("languages.title_en"),
		es: t("languages.title_es"),
	};

	const handleClick = () => {
		console.log(window.location.href);
	};

	return (
		<nav className="flex justify-between">
			<h1 className="text-3xl italic">{t("landing.brand")}</h1>
			<div className="p-2 flex gap-2">
				<select
					name="language"
					id="language"
					className="border-2 rounded-md"
				>
					<option disabled selected>
						{t("languages.title_lang")}
					</option>
					{Object.keys(languages).map((option) => (
						<option value={option}>{languages[option]}</option>
					))}
				</select>
				<a
					className="border-2 rounded-md p-2 border-yellow-400"
					href="/auth/signup"
					id="link-signup"
				>
					{t("landing.anchors.signup")}
				</a>
				<motion.a
					className="border-2 rounded-md p-2 border-yellow-400"
					href="auth/signin"
					id="link-signin"
				>
					{t("landing.anchors.signin")}
				</motion.a>
			</div>
		</nav>
	);
}
