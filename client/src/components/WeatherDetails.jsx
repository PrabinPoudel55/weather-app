function WeatherDetails({ weather }) {
  const { current, currentUnits } = weather;

  const details = [
    {
      icon: "💧",
      label: "Humidity",
      value: `${current.relative_humidity_2m}${currentUnits.relative_humidity_2m}`,
    },
    {
      icon: "💨",
      label: "Wind Speed",
      value: `${current.wind_speed_10m} ${currentUnits.wind_speed_10m}`,
    },
    {
      icon: "🌧️",
      label: "Precipitation",
      value: `${current.precipitation} ${currentUnits.precipitation}`,
    },
  ];

  return (
    <section className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
      {details.map((detail) => (
        <div
          key={detail.label}
          className="rounded-2xl bg-white p-5 text-center shadow-md"
        >
          <div className="text-3xl">{detail.icon}</div>

          <p className="mt-2 text-sm font-medium text-slate-500">
            {detail.label}
          </p>

          <p className="mt-1 text-xl font-bold text-slate-800">
            {detail.value}
          </p>
        </div>
      ))}
    </section>
  );
}

export default WeatherDetails;