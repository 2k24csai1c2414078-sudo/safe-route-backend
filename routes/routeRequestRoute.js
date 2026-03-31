const express = require("express");
const router = express.Router();

const RouteRequest = require("../models/routeRequest");
const getBestRoutes = require("../utils/routeAI");
const Civic = require("../models/civicIssue");

router.post("/generate", async (req, res) => {
  const { source, destination } = req.body;

  // Validation
  if (!source || !destination) {
    return res.status(400).json({
      success: false,
      message: "Source and destination required"
    });
  }

  try {
    const civicIssues = await Civic.find();

    const result = getBestRoutes(source, destination, civicIssues);

    await RouteRequest.create({
      source,
      destination,
      safeRoute: result.safeRoute,
      fastRoute: result.alternativeRoute
    });

    res.json({
      success: true,
      data: {
        source,
        destination,
        safeRoute: result.safeRoute,
        alternativeRoute: result.alternativeRoute
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;