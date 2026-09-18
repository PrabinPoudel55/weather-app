import { getWeatherDescription, getWeatherIcon } from "../utils/weatherUtils";

function Forecast({ weather }) {
  const { daily, dailyUnits } = weather;

  return (
    <section className="mt-6 w-full max-w-5xl">
      <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-6">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            7-Day Forecast
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            Weather for the week
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {daily.time.map((date, index) => {
            const weatherCode = daily.weather_code[index];

            const maxTemperature = Math.round(
              daily.temperature_2m_max[index]
            );

            const minTemperature = Math.round(
              daily.temperature_2m_min[index]
            );

            const rainProbability =
              daily.precipitation_probability_max[index];

            const isToday = index === 0;

            return (
              <div
                key={date}
                className={`rounded-2xl border p-4 transition ${
                  isToday
                    ? "border-sky-300 bg-sky-50"
                    : "border-slate-100 bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {isToday ? "Today" : formatDay(date)}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {formatDate(date)}
                    </p>
                  </div>

                  <div className="text-3xl">
                    {getWeatherIcon(weatherCode, 1)}
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-slate-600">
                  {getWeatherDescription(weatherCode)}
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-800">
                      {maxTemperature}
                      {dailyUnits.temperature_2m_max}
                    </p>

                    <p className="text-sm text-slate-400">
                      {minTemperature}
                      {dailyUnits.temperature_2m_min}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      Rain
                    </p>

                    <p className="text-sm font-bold text-sky-600">
                      {rainProbability}
                      {dailyUnits.precipitation_probability_max}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function formatDay(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString([], {
    weekday: "short",
  });
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
}

export default Forecast;