import { NavLink } from "react-router-dom";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const arrayForNavbar = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.talents"), path: "/talents" },
    { name: t("navbar.projects"), path: "/works" },
  ];
  return (
    <section className="bg-transparent p-4">
      <nav className="flex justify-between items-center text-white text-md">
        <ul className="flex gap-4 list-none m-0 p-0">
          {arrayForNavbar.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <LanguageButton />
      </nav>
    </section>
  );
}
