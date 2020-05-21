const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  content: String,
});

module.exports = mongoose.model("questions", QuestionSchema);
