const mongoose = require("mongoose");

const RouteRequestSchema = new mongoose.Schema({
  source: String,
  destination: String,
  safeRoute: Object,
  fastRoute: Object,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RouteRequest", RouteRequestSchema);