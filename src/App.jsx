import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Portfolyo from "./pages/Portfolyo";
import Talents from "./pages/Talents";
import PersonalInfo from "./pages/Otobiyografi";
import Favorites from "./pages/FavoriteThings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/favorites" element={<Favorites />} />,
        <Route path="/works" element={<Portfolyo />} />
        <Route path="/talents" element={<Talents />} />
      </Routes>
    </>
  );
}

export default App;
