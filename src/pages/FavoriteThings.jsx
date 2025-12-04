import { useState } from "react";
import Movies from "../components/Movies";
import Series from "../components/Series";

export default function Favorites() {
  const [tab, setTab] = useState("movies");

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-4 mb-6 ">
        <button
          onClick={() => setTab("movies")}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            tab === "movies"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Movies
        </button>

        <button
          onClick={() => setTab("series")}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            tab === "series"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Series
        </button>
      </div>

      {/* Content */}
      {tab === "movies" ? <Movies /> : <Series />}
    </div>
  );
}
