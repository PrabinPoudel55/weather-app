import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import Forecast from "./components/Forecast";

import { getWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastCity, setLastCity] = useState("Kathmandu");

  const searchWeather = async (city) => {
  try {
    setLoading(true);
    setError("");

    const data = await getWeather(city);

    setWeather(data);
    setLastCity(city);
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
    <div
  className={`min-h-screen px-4 py-8 transition-colors duration-700 sm:px-6 ${
    weather?.current?.is_day
      ? "bg-gradient-to-br from-sky-100 via-white to-blue-100"
      : "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950"
  }`}
>
      <main className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Header */}
        <header className="mb-8 text-center">
         <p
  className={`text-sm font-semibold uppercase tracking-widest ${
    weather?.current?.is_day
      ? "text-sky-600"
      : "text-sky-300"
  }`}
>
  {weather?.current?.is_day ? "Daytime Weather" : "Nighttime Weather"}
</p>

         <h1
  className={`mt-2 text-4xl font-bold sm:text-5xl ${
    weather?.current?.is_day
      ? "text-slate-800"
      : "text-white"
  }`}
>
  Weather App
</h1>

         <p
  className={`mt-3 ${
    weather?.current?.is_day
      ? "text-slate-500"
      : "text-slate-300"
  }`}
>
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
        {weather && (
          <div className="mt-8 flex w-full flex-col items-center">
            <CurrentWeather weather={weather} />

            <WeatherDetails weather={weather} />

<button
  onClick={() => searchWeather(lastCity)}
  disabled={loading}
  className="mt-6 rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Refreshing..." : "🔄 Refresh Weather"}
</button>

<HourlyForecast weather={weather} />

<Forecast weather={weather} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;