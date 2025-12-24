import { useTranslation } from "react-i18next";
import { useEffect, useState, createElement } from "react";
import * as LucideIcons from "lucide-react";
import { getPersonalData } from "../data";

export default function Autobiography() {
  const { t } = useTranslation();
  const informations = getPersonalData(t);

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
        </div>
        {/* ALT ALTA TÜM KARTLAR */}
        <div className="space-y-20">
          {informations.map((info, index) => {
            const IconComponent = LucideIcons[info.icon];

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon & Header (approx 40%) */}
                  <div className="md:col-span-5 flex flex-col space-y-6 md:border-r border-slate-700/50 pr-8">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClasses[info.color]} shadow-lg flex items-center justify-center`}
                    >
                      {IconComponent &&
                        createElement(IconComponent, {
                          className: "w-10 h-10 text-white",
                        })}
                    </div>

                    <div>
                      <p className={`text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${colorClasses[info.color]} mb-2`}>
                        {info.subtitle}
                      </p>
                      <h2 className="text-4xl font-bold text-white leading-tight">
                        {info.title}
                      </h2>
                    </div>
                  </div>

                  {/* Right Column: Content (approx 60%) */}
                  <div className="md:col-span-7 flex flex-col justify-center h-full">
                    <p className="text-gray-300 text-xl leading-loose">
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
