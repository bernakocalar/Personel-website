import Favorites from "./pages/FavoriteThings";
import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
