import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />,
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
