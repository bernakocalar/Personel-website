import { BarChart, Code, Database, Brush, GitMerge, Server, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Talents() {
  const { t } = useTranslation();
  const talents = [
    { name: "React", level: 75, icon: Code, color: "text-blue-400" },
    { name: "JavaScript", level: 75, icon: Code, color: "text-yellow-400" },
    { name: "HTML/CSS", level: 75, icon: Brush, color: "text-orange-400" },
    { name: "Node.js", level: 65, icon: Server, color: "text-green-400" },
    { name: "Java", level: 65, icon: Coffee, color: "text-red-500" },
    { name: "Spring Boot", level: 65, icon: Server, color: "text-green-500" },
    { name: "SQL", level: 60, icon: Database, color: "text-red-400" },
    { name: "Git", level: 80, icon: GitMerge, color: "text-purple-400" },
    { name: "Next.js", level: 75, icon: Code, color: "text-gray-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">{t("navbar.talents")}</h1>
          <p className="text-gray-300 text-xl">{t("showcase_skills")}</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {talents.map((talent, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className={`p-3 bg-slate-700 rounded-xl ${talent.color}`}>
                  <talent.icon className="w-8 h-8" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-white font-semibold text-lg">{talent.name}</p>
                    <p className="text-gray-400 text-sm">{talent.level}%</p>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full animate-width-grow"
                      style={{ width: `${talent.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}