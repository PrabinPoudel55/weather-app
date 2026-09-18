import {
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils";

function CurrentWeather({ weather }) {
  const { location, current, currentUnits } = weather;

  const description = getWeatherDescription(
    current.weather_code
  );

  const icon = getWeatherIcon(
    current.weather_code,
    current.is_day
  );

  return (
    <section className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
      {/* Main Weather Information */}
      <div className="p-6 sm:p-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Location */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Current Weather
            </p>

            <div className="mt-3 flex items-center justify-center gap-2 md:justify-start">
              <span className="text-xl">📍</span>

              <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
                {location.name}
              </h2>
            </div>

            <p className="mt-1 text-slate-500">
              {location.country}
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Coordinates:{" "}
              {location.latitude.toFixed(2)},{" "}
              {location.longitude.toFixed(2)}
            </p>
          </div>

          {/* Weather */}
          <div className="text-center">
            <div className="text-7xl sm:text-8xl">
              {icon}
            </div>

            <p className="mt-3 text-lg font-semibold text-slate-700">
              {description}
            </p>
          </div>

          {/* Temperature */}
          <div className="text-center md:text-right">
            <div className="flex items-start justify-center md:justify-end">
              <span className="text-6xl font-bold text-slate-800 sm:text-7xl">
                {Math.round(current.temperature_2m)}
              </span>

              <span className="mt-2 ml-2 text-2xl text-slate-500">
                {currentUnits.temperature_2m}
              </span>
            </div>

            <p className="mt-2 text-slate-500">
              Feels like{" "}
              <span className="font-semibold text-slate-700">
                {Math.round(current.apparent_temperature)}
                {currentUnits.apparent_temperature}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-1 border-t border-slate-100 sm:grid-cols-3">
        <WeatherDetail
          icon="💧"
          label="Humidity"
          value={`${current.relative_humidity_2m}${currentUnits.relative_humidity_2m}`}
        />

        <WeatherDetail
          icon="💨"
          label="Wind Speed"
          value={`${current.wind_speed_10m} ${currentUnits.wind_speed_10m}`}
        />

        <WeatherDetail
          icon="🌧️"
          label="Precipitation"
          value={`${current.precipitation} ${currentUnits.precipitation}`}
        />
      </div>
    </section>
  );
}

function WeatherDetail({ icon, label, value }) {
  return (
    <div className="flex items-center justify-center gap-4 border-b border-slate-100 p-5 last:border-b-0 sm:flex-col sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="text-3xl">
        {icon}
      </div>

      <div className="text-center">
        <p className="text-sm font-medium text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-lg font-bold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;