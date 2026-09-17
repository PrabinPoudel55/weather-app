const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    // Check whether city was provided
    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required",
      });
    }

    // -----------------------------------
    // STEP 1: Find city coordinates
    // -----------------------------------

    const geocodingResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1&language=en&format=json`
    );

    if (!geocodingResponse.ok) {
      throw new Error("Failed to connect to geocoding service");
    }

    const geocodingData = await geocodingResponse.json();

    // Check whether city was found
    if (!geocodingData.results || geocodingData.results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Could not find city: ${city}`,
      });
    }

    const location = geocodingData.results[0];

    const latitude = location.latitude;
    const longitude = location.longitude;

    // -----------------------------------
    // STEP 2: Get weather data
    // -----------------------------------

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=auto&forecast_days=7`
    );

    if (!weatherResponse.ok) {
      throw new Error("Failed to connect to weather service");
    }

    const weatherData = await weatherResponse.json();

    // -----------------------------------
    // STEP 3: Send useful data to frontend
    // -----------------------------------

    res.json({
      success: true,

      location: {
        name: location.name,
        country: location.country,
        countryCode: location.country_code,
        latitude,
        longitude,
        timezone: location.timezone,
      },

      current: weatherData.current,

      currentUnits: weatherData.current_units,

      hourly: weatherData.hourly,

      hourlyUnits: weatherData.hourly_units,

      daily: weatherData.daily,

      dailyUnits: weatherData.daily_units,
    });
  } catch (error) {
    console.error("Weather API Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch weather data",
      error: error.message,
    });
  }
};

module.exports = {
  getWeather,
};