const SearchHistory = require("../models/SearchHistory");

const getSearchHistory = async (req, res) => {
  try {
    const history = await SearchHistory.find()
      .sort({ searchedAt: -1 })
      .limit(20);

    res.json({
      success: true,
      count: history.length,
      history,
    });
  } catch (error) {
    console.error("History Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch search history",
    });
  }
};

const deleteSearchHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedHistory =
      await SearchHistory.findByIdAndDelete(id);

    if (!deletedHistory) {
      return res.status(404).json({
        success: false,
        message: "Search history not found",
      });
    }

    res.json({
      success: true,
      message: "Search history deleted",
    });
  } catch (error) {
    console.error("Delete History Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to delete search history",
    });
  }
};

const clearSearchHistory = async (req, res) => {
  try {
    await SearchHistory.deleteMany({});

    res.json({
      success: true,
      message: "Search history cleared",
    });
  } catch (error) {
    console.error("Clear History Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to clear search history",
    });
  }
};

module.exports = {
  getSearchHistory,
  deleteSearchHistory,
  clearSearchHistory,
};