const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = Schema({
  question_id: {
    type: Schema.Types.ObjectId,
    ref: "questions",
  },
  department_id: {
    type: Schema.Types.ObjectId,
    ref: "departments",
  },
  answer_value: Number,
  score: Number,
});

module.exports = mongoose.model("quizzes", QuizSchema);
