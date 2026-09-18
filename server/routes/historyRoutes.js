const express = require("express");

const {
  getSearchHistory,
  deleteSearchHistory,
  clearSearchHistory,
} = require("../controllers/historyController");

const router = express.Router();

router.get("/", getSearchHistory);

router.delete("/:id", deleteSearchHistory);

router.delete("/", clearSearchHistory);

module.exports = router;