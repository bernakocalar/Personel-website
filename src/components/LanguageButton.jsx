import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
    >
      {i18n.language === "tr" ? t("en") : t("tr")}
    </button>
  );
}
