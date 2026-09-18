import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";

import { getWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (error) {
      setWeather(null);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchWeather("Kathmandu");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 px-4 py-8 sm:px-6">
      <main className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Header */}
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Weather Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-800 sm:text-5xl">
            Weather App
          </h1>

          <p className="mt-3 text-slate-500">
            Search any city and check its current weather
          </p>
        </header>

        {/* Search */}
        <SearchBar
          onSearch={searchWeather}
          loading={loading}
        />

        {/* Error */}
        {error && (
          <div className="mt-6 w-full max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-red-700">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && !weather && (
          <div className="mt-10 text-center text-slate-500">
            Loading weather...
          </div>
        )}

        {/* Weather */}
        {weather && !loading && (
          <div className="mt-8 flex w-full flex-col items-center gap-6">
            <CurrentWeather weather={weather} />

            <WeatherDetails weather={weather} />

            <Forecast weather={weather} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;