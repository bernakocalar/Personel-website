import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Talents from "./pages/Talents";
import Autobiography from "./pages/Autobiography";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Autobiography />} />

        <Route path="/works" element={<Portfolio />} />
        <Route path="/talents" element={<Talents />} />
      </Routes>
    </>
  );
}

export default App;
