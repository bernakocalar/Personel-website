import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

export default function Portfolyo() {
  const [works, setWorks] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          {t("navbar.projects")}
        </h1>

        {/* Grid layout - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <ProjectCard key={index} project={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
