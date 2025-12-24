import { NavLink } from "react-router-dom";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const arrayForNavbar = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.talents"), path: "/talents" },
    { name: t("navbar.projects"), path: "/works" },
  ];

  const SocialButtons = () => (
    <>
      <a
        href="https://github.com/bernakocalar"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-center"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/hatice-berna-kocalar-923b7a166/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-center"
      >
        LinkedIn
      </a>
    </>
  );

  return (
    <section className="bg-transparent p-4 absolute top-0 w-full z-20">
      <nav className="flex justify-between items-center text-white text-md">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 list-none m-0 p-0">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SocialButtons />
          <LanguageButton />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 p-4 flex flex-col gap-4 animate-fade-in shadow-2xl">
          <ul className="flex flex-col gap-4 list-none m-0 p-0 items-center">
            {arrayForNavbar.map((item, index) => (
              <li key={index} className="w-full text-center">
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-lg ${isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-200"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-2">
            <SocialButtons />
            <div className="flex justify-center">
              <LanguageButton />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
