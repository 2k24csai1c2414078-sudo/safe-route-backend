const mongoose = require("mongoose");

const UserPreferencesSchema = new mongoose.Schema({
  userId: String,
  preferredTransport: String,
  avoidAreas: [String],
  theme: String,
});

module.exports = mongoose.model("UserPreferences", UserPreferencesSchema);