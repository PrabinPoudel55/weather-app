import { getWeatherDescription, getWeatherIcon } from "../utils/weatherUtils";

function HourlyForecast({ weather }) {
  const { current, hourly, hourlyUnits } = weather;

  const currentIndex = hourly.time.findIndex(
    (time) => time === current.time
  );

  const startIndex = currentIndex >= 0 ? currentIndex : 0;
  const next24Hours = hourly.time.slice(startIndex, startIndex + 24);

  return (
    <section className="mt-6 w-full max-w-5xl">
      <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-6">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Hourly Forecast
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            Next 24 hours
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-3">
          {next24Hours.map((time, index) => {
            const actualIndex = startIndex + index;

            const temperature = Math.round(
              hourly.temperature_2m[actualIndex]
            );

            const weatherCode = hourly.weather_code[actualIndex];

            const rainProbability =
              hourly.precipitation_probability[actualIndex];

            const windSpeed =
              hourly.wind_speed_10m[actualIndex];

            const isCurrentHour = actualIndex === currentIndex;

            return (
              <div
                key={time}
                className={`min-w-[145px] rounded-2xl border p-4 text-center transition ${
                  isCurrentHour
                    ? "border-sky-300 bg-sky-50"
                    : "border-slate-100 bg-slate-50"
                }`}
              >
                <p className="text-sm font-semibold text-slate-500">
                  {isCurrentHour ? "Now" : formatHour(time)}
                </p>

                <div className="my-3 text-4xl">
                  {getWeatherIcon(weatherCode, 1)}
                </div>

                <p className="text-2xl font-bold text-slate-800">
                  {temperature}
                  {hourlyUnits.temperature_2m}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {getWeatherDescription(weatherCode)}
                </p>

                <div className="mt-4 space-y-1 text-xs text-slate-500">
                  <p>
                    ☔ {rainProbability}
                    {hourlyUnits.precipitation_probability}
                  </p>

                  <p>
                    💨 {windSpeed} {hourlyUnits.wind_speed_10m}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function formatHour(dateTime) {
  const date = new Date(dateTime);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default HourlyForecast;