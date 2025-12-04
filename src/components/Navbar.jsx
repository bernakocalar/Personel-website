import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const arrayForNavbar = [
    { name: "who am ı", path: "/" },
    { name: "what ı do", path: "/talents" },
    { name: "what have ı done", path: "/works" },
    { name: "loved movies", path: "/movies" },
    { name: "loved series", path: "/series" },
    {},
  ];
  return (
    <section className="bg-blue-800 p-4">
      <nav className="flex justify-between text-white text-md">
        {arrayForNavbar.map((item, index) => (
          <button key={index} onClick={() => navigate(item.path)}>
            {item.name}
          </button>
        ))}
      </nav>
    </section>
  );
}
