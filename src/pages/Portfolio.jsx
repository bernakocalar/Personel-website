import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { getWorksData } from "../data";

export default function Portfolio() {
    const { t } = useTranslation();
    const works = getWorksData(t);

    return (
        <div className="min-h-screen  py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                <h1 className="text-5xl font-bold text-white text-center mb-12">
                    {t("navbar.projects")}
                </h1>

                {/* Stack layout - 1 column */}
                <div className="space-y-20 animate-fade-in">
                    {works.map((work, index) => (
                        <ProjectCard key={index} project={work} />
                    ))}
                </div>
            </div>
        </div>
    );
}
