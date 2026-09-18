function WeatherDetails({ weather }) {
  const { current, currentUnits } = weather;

  return (
    <section className="mt-6 w-full max-w-5xl">
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-lg sm:grid-cols-2 lg:grid-cols-4">
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

        <WeatherDetail
          icon="🌡️"
          label="Feels Like"
          value={`${Math.round(current.apparent_temperature)}${currentUnits.apparent_temperature}`}
        />
      </div>
    </section>
  );
}

function WeatherDetail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 p-5 last:border-b-0 sm:flex-col sm:justify-center sm:border-r sm:border-b-0 sm:last:border-r-0">
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

export default WeatherDetails;