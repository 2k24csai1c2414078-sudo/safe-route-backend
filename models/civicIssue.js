const mongoose = require("mongoose");

const CivicIssueSchema = new mongoose.Schema({
  issueType: String,   // pothole, streetlight, crime, road damage, etc
  description: String,
  latitude: Number,
  longitude: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CivicIssue", CivicIssueSchema);