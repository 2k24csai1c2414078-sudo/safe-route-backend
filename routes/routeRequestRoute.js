const express = require("express");
const router = express.Router();

const RouteRequest = require("../models/routeRequest");

// API to receive route request from frontend
router.post("/generate", async (req, res) => {
  const { source, destination } = req.body;

  try {
    // Here Person 3 AI module will be called
    // For now we mock the AI output (later we will replace with actual AI result)
    const safeRoute = {
      route: "Safe Route Path",
      score: 8.5,
      details: "Low crime, low traffic"
    };

    const fastRoute = {
      route: "Fast Route Path",
      time: "20 min",
      details: "Minimum distance"
    };

    // Save to DB
    const saved = await RouteRequest.create({
      source,
      destination,
      safeRoute,
      fastRoute
    });

    res.json({
      success: true,
      data: saved
    });

  } catch (err) {
    res.json({
      success: false,
      error: err
    });
  }
});

module.exports = router;