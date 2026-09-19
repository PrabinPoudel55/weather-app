const API_URL =
  "https://weather-app-ivge.onrender.com/api/weather";

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}?city=${encodeURIComponent(city)}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather");
    }

    return data;
  } catch (error) {
    console.error("Weather Service Error:", error);
    throw error;
  }
};