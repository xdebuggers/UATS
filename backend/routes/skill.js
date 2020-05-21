const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Skill = require("../models/Skill");

router.get("/skill", async (req, res) => {
  Skill.find({})
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.get("/skill/:id", async (req, res) => {
  Skill.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/skill", (req, res) => {
  const skill = new Skill(req.body);
  skill
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.put("/skill/:id", (req, res) => {
  Skill.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: "Skill successfully updated." }))
    .catch((error) => res.status(500).send(error));
});

router.delete("/Skill/:id", async (req, res) => {
  Skill.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "Skill successfully deleted." }))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
