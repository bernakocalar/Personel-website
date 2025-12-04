import { User, Code, Briefcase, Heart, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PersonalInfo() {
  const { t } = useTranslation();
  const informations = [
    {
      icon: User,
      subtitle: "Who I Am",
      content:
        "Hi! I'm Berna Kocalar, a passionate web developer with a love for creating beautiful and functional websites.",
      image: "/profile.jpg",
      color: "blue",
    },
    {
      icon: GraduationCap,
      subtitle: "Academic Background",
      content: "Hacettepe University - Bachelor's Degree.",
      image: "/education.jpg",
      color: "blue",
    },
    {
      icon: Briefcase,
      title: "Experience",
      content:
        "5+ years of web development experience, working with modern frameworks and technologies to build scalable applications.",
      image: "/experience.jpg",
      color: "green",
    },
    {
      icon: Code,
      title: "Skills",
      subtitle: "Technical Expertise",
      content:
        "React, Next.js, TypeScript, TailwindCSS, Node.js, and more. Always learning and adapting to new technologies.",
      image: "/skills.jpg",
      color: "orange",
    },
    {
      icon: Heart,
      title: "Hobbies",
      subtitle: "Beyond Coding",
      content:
        "When I'm not coding, I enjoy reading books, traveling to new places, and exploring the latest tech trends.",
      image: "/hobbies.jpg",
      color: "pink",
    },
  ];

  const colorClasses = {
    purple: "from-purple-500 to-purple-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">{t("welcome")}</h1>
          <p className="text-blue-300 text-xl">Get to know me better</p>
        </div>

        {/* ALT ALTA TÜM KARTLAR */}
        <div className="space-y-20">
          {informations.map((info, index) => {
            const IconComponent = info.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Right: Information */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          colorClasses[info.color]
                        } shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <div>
                        <p className="text-blue-300 text-sm uppercase tracking-wider mb-1">
                          {info.subtitle}
                        </p>
                        <h2 className="text-5xl font-bold text-white leading-tight">
                          {info.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-gray-300 text-2xl leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
