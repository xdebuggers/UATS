const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Job = require("../models/Job");

router.get("/job", async (req, res) => {
  Job.find({})
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.get("/job/:id", async (req, res) => {
  Job.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/job", (req, res) => {
  const job = new Job(req.body);
  job
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.put("/job/:id", (req, res) => {
  Job.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: "Job successfully updated." }))
    .catch((error) => res.status(500).send(error));
});

router.delete("/job/:id", async (req, res) => {
  Job.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "Job successfully deleted." }))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
