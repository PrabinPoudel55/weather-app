const API_URL = "http://localhost:5000/api/weather";

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