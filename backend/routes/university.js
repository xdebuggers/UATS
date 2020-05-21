const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const University = require("../models/University");

router.get("/university", async (req, res) => {
  University.find({})
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.get("/university/:id", async (req, res) => {
  University.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/university", (req, res) => {
  const university = new University(req.body);
  university
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.put("/university/:id", (req, res) => {
  University.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: "University successfully updated." }))
    .catch((error) => res.status(500).send(error));
});

router.delete("/university/:id", async (req, res) => {
  University.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "University successfully deleted." }))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
