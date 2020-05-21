const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Department = require("../models/Department");

router.get("/department", async (req, res) => {
  Department.find({})
    .then((result) => {
      let data = [];

      for (let i = 0; i < result.length; i++) {
        data.push(result[i].transform());
      }

      res.send(data);
    })
    .catch((error) => res.status(500).send(error));
});

router.get("/department/:id", async (req, res) => {
  Department.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.post("/department", (req, res) => {
  const department = new Department(req.body);
  department
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
});

router.put("/department/:id", (req, res) => {
  Department.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: "Department successfully updated." }))
    .catch((error) => res.status(500).send(error));
});

router.delete("/department/:id", async (req, res) => {
  Department.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ message: "Department successfully deleted." }))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
