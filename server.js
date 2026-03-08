const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://prakhar:Prakhar123@cluster0.afwahup.mongodb.net/safe_route_app?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.use("/api/user/preferences", require("./routes/userPreferencesRoute"));
app.use("/api/route", require("./routes/routeRequestRoute"));
app.use("/api/civic", require("./routes/civicIssueRoute"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});