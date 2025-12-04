import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Calendar, Film } from "lucide-react";

export default function Series() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  const series = [
    "breaking+bad",
    "game+of+thrones",
    "stranger+things",
    "the+crown",
    "the+mandalorian",
  ];

  useEffect(() => {
    const fetchAllMovies = async () => {
      setLoading(true);
      const promises = series.map((title) =>
        fetch(`https://www.omdbapi.com/?t=${title}&apikey=3483465a`).then(
          (res) => res.json()
        )
      );
      const results = await Promise.all(promises);
      setMovieData(results);
      setLoading(false);
    };
    fetchAllMovies();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % movieData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + movieData.length) % movieData.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <Film className="w-16 h-16 text-purple-400 animate-pulse mx-auto mb-4" />
          <p className="text-white text-xl">Diziler yükleniyor...</p>
        </div>
      </div>
    );
  }

  const currentMovie = movieData[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Ana Slider Container */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Film Kartı */}
          <div
            key={currentIndex}
            className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 transition-all duration-500 ${
              direction === 1 ? "animate-slideInRight" : "animate-slideInLeft"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Sol: Poster */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={currentMovie.Poster}
                  s
                  alt={currentMovie.Title}
                  className="relative w-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Sağ: Bilgiler */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2 leading-tight">
                    {currentMovie.Title}
                  </h1>
                  <div className="flex items-center gap-4 text-purple-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {currentMovie.Year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {currentMovie.imdbRating}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-purple-300 text-sm uppercase tracking-wider mb-1">
                      Tür
                    </p>
                    <p className="text-white text-lg">{currentMovie.Genre}</p>
                  </div>

                  <div>
                    <p className="text-purple-300 text-sm uppercase tracking-wider mb-1">
                      Yönetmen
                    </p>
                    <p className="text-white text-lg">
                      {currentMovie.Director}
                    </p>
                  </div>

                  <div>
                    <p className="text-purple-300 text-sm uppercase tracking-wider mb-1">
                      Oyuncular
                    </p>
                    <p className="text-white text-lg">{currentMovie.Actors}</p>
                  </div>

                  <div>
                    <p className="text-purple-300 text-sm uppercase tracking-wider mb-1">
                      Özet
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {currentMovie.Plot}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigasyon Butonları */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Noktalar (Dots) */}
        <div className="flex justify-center gap-3 mt-8">
          {movieData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-purple-500"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
