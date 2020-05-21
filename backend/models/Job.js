const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("jobs", JobSchema);
