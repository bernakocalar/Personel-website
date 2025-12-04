import ProjectCard from "../components/ProjectCard";

export default function Portfolyo() {
  const works = [
    {
      name: "readixon",
      images: ["/readixon.png", "/readixon2.png", "/readixon3.png"],
      link: "https://readixon.com",
      techStack: "React, TailwindCSS",
      description:
        "A book review platform where users can read and share reviews of their favorite books.",
    },
    {
      name: "nestforyou",
      images: ["/nestforyou.png", "/nestforyou2.png", "/nestforyou3.png"],
      link: "https://nestforyou.com",
      techStack: "React, TailwindCSS",
      description:
        "A book review platform where users can read and share reviews of their favorite books.",
    },
    {
      name: "movieapp",
      images: ["/movieapp.png", "/movieapp2.png", "/movieapp3.png"],
      link: "https://movieapp.com",
      techStack: "React, TailwindCSS",
      description:
        "A book review platform where users can read and share reviews of their favorite books.",
    },
    {
      name: "weatherapp",
      images: ["/weatherapp.png", "/weatherapp2.png", "/weatherapp3.png"],
      link: "https://weatherapp.com",
      techStack: "React, TailwindCSS",
      description:
        "A book review platform where users can read and share reviews of their favorite books.",
    },
    {
      name: "taskmanager",
      images: ["/taskmanager.png", "/taskmanager2.png", "/taskmanager3.png"],
      link: "https://taskmanager.com",
      techStack: "React, TailwindCSS",
      description:
        "A book review platform where users can read and share reviews of their favorite books.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          My Projects
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
