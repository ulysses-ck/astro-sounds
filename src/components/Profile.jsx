import { useTranslation } from "react-i18next";

export default function Profile() {
	const { t } = useTranslation();

	return (
		<section>
			<h3 className="text-darker-alert text-4xl">
					{t("translation.dashboard.title_fname")}
			</h3>
			<p>
					{t("translation.dashboard.title_email")}
			</p>
			<p>
					{t("translation.dashboard.title_user")}
			</p>
		</section>
	);
}
