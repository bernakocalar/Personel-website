import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Talents from "./pages/Talents";
import Autobiography from "./pages/Autobiography";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Autobiography />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/talents" element={<Talents />} />
      </Routes>
    </>
  );
}

export default App;
