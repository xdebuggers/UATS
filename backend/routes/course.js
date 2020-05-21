const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Course = require("../models/Course");

router.get("/course", async (req, res) => {
  Course.find({})
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.get("/course/:id", async (req, res) => {
  Course.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/course", (req, res) => {
  const course = new Course(req.body);
  course
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.put("/course/:id", (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: "Course successfully updated." }))
    .catch((error) => res.status(500).send(error));
});

router.delete("/course/:id", async (req, res) => {
  Course.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "Course successfully deleted." }))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
