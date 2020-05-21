const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/question", async (req, res) => {
  Question.find({})
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.get("/question/:id", async (req, res) => {
  Question.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/question", (req, res) => {
  const question = new Question(req.body);
  question
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.put("/question/:id", (req, res) => {
  Question.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: "Question successfully updated." }))
    .catch((error) => res.status(500).send(error));
});

router.delete("/question/:id", async (req, res) => {
  Question.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "Question successfully deleted." }))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
