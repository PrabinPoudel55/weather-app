export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",

    45: "Fog",
    48: "Rime fog",

    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",

    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",

    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",

    66: "Light freezing rain",
    67: "Heavy freezing rain",

    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",

    80: "Light rain showers",
    81: "Moderate rain showers",
    82: "Heavy rain showers",

    85: "Light snow showers",
    86: "Heavy snow showers",

    95: "Thunderstorm",
    96: "Thunderstorm with light hail",
    99: "Thunderstorm with heavy hail",
  };

  return weatherCodes[code] || "Unknown weather";
};

export const getWeatherIcon = (code, isDay = 1) => {
  // Clear sky
  if (code === 0) {
    return isDay ? "☀️" : "🌙";
  }

  // Mainly clear
  if (code === 1) {
    return isDay ? "🌤️" : "🌙";
  }

  // Partly cloudy
  if (code === 2) {
    return isDay ? "⛅" : "☁️";
  }

  // Overcast
  if (code === 3) {
    return "☁️";
  }

  // Fog
  if ([45, 48].includes(code)) {
    return "🌫️";
  }

  // Drizzle
  if ([51, 53, 55, 56, 57].includes(code)) {
    return "🌦️";
  }

  // Rain
  if (
    [61, 63, 65, 66, 67, 80, 81, 82].includes(code)
  ) {
    return "🌧️";
  }

  // Snow
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "❄️";
  }

  // Thunderstorm
  if ([95, 96, 99].includes(code)) {
    return "⛈️";
  }

  return isDay ? "🌤️" : "🌙";
};