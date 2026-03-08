const express = require("express");
const router = express.Router();

const UserPreferences = require("../models/userPreferences");

// Save or update preferences
router.post("/save", async (req, res) => {
  const { userId, preferredTransport, avoidAreas, theme } = req.body;

  try {
    const updated = await UserPreferences.findOneAndUpdate(
      { userId },
      { preferredTransport, avoidAreas, theme },
      { new: true, upsert: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.json({ success: false, error: err });
  }
});

// Get preferences
router.get("/:userId", async (req, res) => {
  try {
    const data = await UserPreferences.findOne({ userId: req.params.userId });
    res.json({ success: true, data });
  } catch (err) {
    res.json({ success: false, error: err });
  }
});

module.exports = router;