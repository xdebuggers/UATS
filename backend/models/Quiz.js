const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "questions",
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "departments",
  },
  answer_value: Number,
  score: Number,
});

QuizSchema.method("transform", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;
  obj.department.id = obj.department._id;
  delete obj.department._id;
  obj.question.id = obj.question._id;
  delete obj.question._id;
  return obj;
});

module.exports = mongoose.model("quizzes", QuizSchema);
