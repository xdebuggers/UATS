const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

router.get("/quiz", async (req, res) => {
  Quiz.find({})
    .populate("question")
    .populate("department")
    .then((result) => {
      let data = [];
      for (let i = 0; i < result.length; i++) {
        data.push(result[i].transform());
      }
      res.send(data);
    })
    .catch((error) => res.status(500).send(error));
});

router.get("/quiz/:id", async (req, res) => {
  Quiz.findById(req.params.id)
    .populate("question")
    .populate("department")
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/quiz", (req, res) => {
  const quiz = new Quiz(req.body);

  quiz
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
