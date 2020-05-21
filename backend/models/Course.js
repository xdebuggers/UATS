const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Courses", CourseSchema);
