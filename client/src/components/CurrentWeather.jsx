import {
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils";

function CurrentWeather({ weather }) {
  const { location, current, currentUnits } = weather;
  const isDay = current.is_day === 1;

  const description = getWeatherDescription(
    current.weather_code
  );

  const icon = getWeatherIcon(
    current.weather_code,
    current.is_day
  );

  return (
    <section
  className={`w-full max-w-5xl overflow-hidden rounded-3xl shadow-xl transition-colors duration-700 ${
    isDay ? "bg-white" : "bg-slate-800"
  }`}
>
      {/* Main Weather Information */}
      <div className="p-6 sm:p-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Location */}
          <div className="text-center md:text-left">
  <p
  className={`text-sm font-semibold uppercase tracking-widest ${
    isDay ? "text-sky-600" : "text-sky-300"
  }`}
>
  {isDay ? "Daytime Weather" : "Nighttime Weather"}
</p>

  <div className="mt-3 flex items-center justify-center gap-2 md:justify-start">
    <span className="text-xl">📍</span>

    <h2
  className={`text-3xl font-bold sm:text-4xl ${
    isDay ? "text-slate-800" : "text-white"
  }`}
>
      {location.name}
    </h2>
  </div>

 <p className={`mt-1 ${isDay ? "text-slate-500" : "text-slate-300"}`}>
    {location.country}
  </p>

 <div
  className={`mt-4 space-y-1 text-sm ${
    isDay ? "text-slate-400" : "text-slate-400"
  }`}
>
    <p>
      📍 {location.latitude.toFixed(2)},{" "}
      {location.longitude.toFixed(2)}
    </p>

    <p>
      🕐 {location.timezone}
    </p>
  </div>
</div>

          {/* Weather */}
          <div className="text-center">
            <div className="text-7xl sm:text-8xl">
              {icon}
            </div>

            <p
  className={`mt-3 text-lg font-semibold ${
    isDay ? "text-slate-700" : "text-slate-200"
  }`}
>
              {description}
            </p>
          </div>

          {/* Temperature */}
          <div className="text-center md:text-right">
            <div className="flex items-start justify-center md:justify-end">
              <span
  className={`text-6xl font-bold sm:text-7xl ${
    isDay ? "text-slate-800" : "text-white"
  }`}
>
                {Math.round(current.temperature_2m)}
              </span>

              <span
  className={`mt-2 ml-2 text-2xl ${
    isDay ? "text-slate-500" : "text-slate-300"
  }`}
>
                {currentUnits.temperature_2m}
              </span>
            </div>

            <p className={`mt-2 ${isDay ? "text-slate-500" : "text-slate-300"}`}>
              Feels like{" "}
              <span
  className={`font-semibold ${
    isDay ? "text-slate-700" : "text-white"
  }`}
>
                {Math.round(current.apparent_temperature)}
                {currentUnits.apparent_temperature}
              </span>
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
}



export default CurrentWeather;