const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema({
  name: String,
  description: String,
  satisfaction: String,
  courses: [{ name: String }],
  jobs: [{ name: String }],
  skills: [{ name: String }],
  universities: [{ name: String }],
});

module.exports = mongoose.model("department", DepartmentSchema);
