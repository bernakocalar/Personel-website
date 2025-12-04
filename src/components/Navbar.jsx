import { useNavigate } from "react-router";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const arrayForNavbar = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.talents"), path: "/talents" },
    { name: t("navbar.projects"), path: "/works" },
    { name: t("navbar.favorites"), path: "/favorites" },
  ];
  return (
    <section className="bg-transparent p-4">
      <nav className="flex justify-between text-white text-md">
        {arrayForNavbar.map((item, index) => (
          <button key={index} onClick={() => navigate(item.path)}>
            {item.name}
          </button>
        ))}
        <LanguageButton />
      </nav>
    </section>
  );
}
