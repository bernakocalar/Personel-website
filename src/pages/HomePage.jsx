import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={() => navigate("/favorites")}>Go to Favorites</button>
    </div>
  );
}
