const express = require("express");
const router = express.Router();

const CivicIssue = require("../models/civicIssue");

// Save a new civic issue
router.post("/report", async (req, res) => {
  const { issueType, description, latitude, longitude } = req.body;

  try {
    const saved = await CivicIssue.create({
      issueType,
      description,
      latitude,
      longitude
    });

    res.json({ success: true, data: saved });

  } catch (err) {
    res.json({ success: false, error: err });
  }
});

// Get all issues
router.get("/", async (req, res) => {
  const issues = await CivicIssue.find().sort({ timestamp: -1 });
  res.json({ success: true, data: issues });
});

module.exports = router;