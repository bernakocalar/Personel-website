import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
        {/* Sol: Resim Slider */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative">
            <img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.name} - ${currentImageIndex + 1}`}
              className="relative w-full h-80 object-cover rounded-2xl shadow-2xl transition-all duration-500"
            />

            {/* Resim navigasyon butonları - içeride */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Resim dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentImageIndex
                          ? "w-8 h-2 bg-blue-500"
                          : "w-2 h-2 bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sağ: Bilgiler */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 leading-tight">
              {project.name}
            </h2>
            <div className="flex items-center gap-4 text-blue-300">
              <span className="flex items-center gap-1 text-yellow-400">
                {project.techStack}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-blue-300 text-sm uppercase tracking-wider mb-1">
                {t("description")}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              {t("visit_project")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
