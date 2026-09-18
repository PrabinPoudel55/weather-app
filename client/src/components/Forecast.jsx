import {
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils";

function Forecast({ weather }) {
  const { daily, dailyUnits } = weather;

  return (
    <section className="w-full max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-slate-800">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {daily.time.map((date, index) => {
          const weatherCode = daily.weather_code[index];

          const dateObject = new Date(`${date}T00:00:00`);

          const dayName = dateObject.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div
              key={date}
              className="rounded-2xl bg-white p-4 text-center shadow-md"
            >
              <p className="font-semibold text-slate-700">
                {dayName}
              </p>

              <div className="my-3 text-4xl">
                {getWeatherIcon(weatherCode)}
              </div>

              <p className="text-xs text-slate-500">
                {getWeatherDescription(weatherCode)}
              </p>

              <div className="mt-3 flex justify-center gap-2">
                <span className="font-bold text-slate-800">
                  {Math.round(daily.temperature_2m_max[index])}
                  {dailyUnits.temperature_2m_max}
                </span>

                <span className="text-slate-400">
                  {Math.round(daily.temperature_2m_min[index])}
                  {dailyUnits.temperature_2m_min}
                </span>
              </div>

              <p className="mt-2 text-xs text-sky-600">
                💧 {daily.precipitation_probability_max[index]}
                {dailyUnits.precipitation_probability_max}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Forecast;