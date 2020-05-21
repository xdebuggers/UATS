const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  name: String,
});

CourseSchema.method("transform", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

module.exports = mongoose.model("Courses", CourseSchema);
