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

DepartmentSchema.method("transform", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

module.exports = mongoose.model("department", DepartmentSchema);
