const API_URL =
  "https://weather-app-ivge.onrender.com/api/history";

export const getSearchHistory = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch search history"
    );
  }

  return data;
};

export const deleteSearchHistory = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to delete search history"
    );
  }

  return data;
};

export const clearSearchHistory = async () => {
  const response = await fetch(API_URL, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to clear search history"
    );
  }

  return data;
};