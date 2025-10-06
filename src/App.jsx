import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  MessageSquare,
} from "lucide-react";
import ShaderBackground from "./components/ShaderBackground";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hakkimda");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const projects = [
    {
      title: "Readixon",
      description:
        "React ve Express.js kullanarak geliştirilen modern bir e-kitap uygulaması",
      tech: ["React", "Node.js", "PostgreSQL", "MUI"],
      link: "https://www.readixon.com",
    },
    {
      title: "Mozena Web sitesi",
      description: "Ekip çalışması için geliştirilmiş proje yönetim aracı",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "Blog Platformu",
      description: "Markdown destekli, SEO optimize edilmiş blog sistemi",
      tech: ["Next.js", "PostgreSQL", "Prisma"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "MUI", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Spring Boot", "Python", "Express", "Django"],
    },
    { category: "Database", items: ["PostgreSQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "CI/CD"] },
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız alındı! (Bu bir demo uygulamasıdır)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <main style={{ position: "relative", zIndex: 1, padding: 24 }}>
    <nav className="top-0 w-full h-16 overflow-hidden z-50 border-b border-purple-500/20 relative">
  <div className="absolute inset-0">
    <ShaderBackground />
  </div>

  {/* Navbar içeriği */}
  <div className="relative bg-slate-900/50 backdrop-blur-md h-full">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Portfolio
      </div>

      {/* Menü butonları */}
      <div className="hidden md:flex space-x-8">
        {["hakkimda", "yetenekler", "projeler", "iletisim"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`capitalize transition-colors ${
              activeSection === item
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
          >
            {item === "hakkimda"
              ? "Hakkımda"
              : item === "yetenekler"
              ? "Yetenekler"
              : item === "projeler"
              ? "Projeler"
              : "İletişim"}
          </button>
        ))}
      </div>

      <button
        className="md:hidden text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>
</nav>

      </main>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <img
                className="text-4xl font-bold rounded-b-full text-white"
                src="/profile.PNG"
                alt="Profile"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Ben{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Berna Kocalar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/bernakocalar"
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/hatice-berna-kocalar-923b7a166/"
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:berna.kocalar@gmail.com"
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === "hakkimda" && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
              <User className="mr-3 text-purple-400" />
              Hakkımda
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Yaklaşık 1 yıldır web ve mobil teknolojileri alanında
                çalışıyorum. Modern uygulamalar geliştirme konusunda tutkulu bir
                yazılımcıyım.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kullanıcı deneyimini ön planda tutan, performanslı ve
                ölçeklenebilir çözümler üretmeyi seviyorum. Sürekli öğrenmeye ve
                yeni teknolojileri keşfetmeye açığım.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === "yetenekler" && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
              <Code className="mr-3 text-purple-400" />
              Yetenekler
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <h3 className="text-xl font-bold text-purple-400 mb-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projeler" && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
              <Briefcase className="mr-3 text-purple-400" />
              Projeler
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Detaylar <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "iletisim" && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
              <MessageSquare className="mr-3 text-purple-400" />
              İletişim
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <p className="text-gray-300 text-lg mb-8 text-center">
                Bir proje fikriniz mi var? Birlikte çalışalım!
              </p>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Adınız"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="E-posta Adresiniz"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Mesajınız"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  Mesaj Gönder
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Portfolio. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
