const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://ryborn:8Re9SYpKLQeweagJ@cluster0-fifhc.mongodb.net/uats_db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB is working ..."))
  .catch(() => console.log("Error: MongoDB is not working !!!"));

// Routes
var department = require("./routes/department");
var course = require("./routes/course");
var skill = require("./routes/skill");
var job = require("./routes/job");
var university = require("./routes/university");
var question = require("./routes/question");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Using Routes
app.use("/api/", department);
app.use("/api/", course);
app.use("/api/", skill);
app.use("/api/", job);
app.use("/api/", university);
app.use("/api/", question);

app.listen(8080, () => {
  console.log(`Server listening on http://localhost:8080`);
});
