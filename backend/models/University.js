const mongoose = require("mongoose");

const UniversitySchema = mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("universities", UniversitySchema);
