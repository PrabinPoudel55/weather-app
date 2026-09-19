const FavoriteCity = require("../models/FavoriteCity");

const getFavorites = async (req, res) => {
  try {
    const favorites = await FavoriteCity.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: favorites.length,
      favorites,
    });
  } catch (error) {
    console.error("Favorites Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch favorite cities",
    });
  }
};

const addFavorite = async (req, res) => {
  try {
    const {
      city,
      country,
      countryCode,
      latitude,
      longitude,
      timezone,
    } = req.body;

    if (!city || !country || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        success: false,
        message: "City, country, latitude and longitude are required",
      });
    }

    const existingFavorite = await FavoriteCity.findOne({
      city,
      country,
    });

    if (existingFavorite) {
      return res.status(409).json({
        success: false,
        message: "City is already in favorites",
        favorite: existingFavorite,
      });
    }

    const favorite = await FavoriteCity.create({
      city,
      country,
      countryCode,
      latitude,
      longitude,
      timezone,
    });

    res.status(201).json({
      success: true,
      message: "City added to favorites",
      favorite,
    });
  } catch (error) {
    console.error("Add Favorite Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to add favorite city",
    });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const favorite = await FavoriteCity.findByIdAndDelete(id);

    if (!favorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite city not found",
      });
    }

    res.json({
      success: true,
      message: "City removed from favorites",
    });
  } catch (error) {
    console.error("Delete Favorite Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to remove favorite city",
    });
  }
};

module.exports = {
  getFavorites,
  addFavorite,
  deleteFavorite,
};