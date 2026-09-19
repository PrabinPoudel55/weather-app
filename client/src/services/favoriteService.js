const API_URL =
  "https://weather-app-ivge.onrender.com/api/favorites";

export const getFavorites = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch favorite cities"
    );
  }

  return data;
};

export const addFavorite = async (cityData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to add favorite city"
    );
  }

  return data;
};

export const deleteFavorite = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to remove favorite city"
    );
  }

  return data;
};