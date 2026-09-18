import {
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils";

function CurrentWeather({ weather }) {
  const { location, current, currentUnits } = weather;

  const weatherDescription = getWeatherDescription(
    current.weather_code
  );

  const weatherIcon = getWeatherIcon(
    current.weather_code,
    current.is_day
  );

  return (
    <section className="w-full max-w-4xl rounded-3xl bg-white p-6 shadow-lg sm:p-8">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Current Weather
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-800">
          {location.name}
        </h2>

        <p className="text-slate-500">
          {location.country}
        </p>

        <div className="mt-6 text-7xl">
          {weatherIcon}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <span className="text-6xl font-bold text-slate-800">
            {Math.round(current.temperature_2m)}
          </span>

          <span className="ml-2 text-2xl text-slate-500">
            {currentUnits.temperature_2m}
          </span>
        </div>

        <p className="mt-3 text-xl font-medium text-slate-600">
          {weatherDescription}
        </p>

        <p className="mt-2 text-slate-500">
          Feels like{" "}
          {Math.round(current.apparent_temperature)}
          {currentUnits.apparent_temperature}
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;