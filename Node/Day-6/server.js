const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;

function studentMessage(req, res, next) {
  console.log("$$$$$$$$$$$$$$$$$$ - STUDENT!");
  next();
}

function mentorMessage(req, res, next) {
  console.log("**************** - MENTOR!");
  next();
}

function logRequest(req, res, next) {
  console.log(
    `Received ${req.method} request for ${
      req.url
    } at ${new Date().toISOString()}`
  );
  next();
}

function testAuthentication(req, res, next) {
  if (req.query.token === "movieTicket") {
    req.user = { id: 1, name: "John the movie fan" };
    next();
  } else if (req.query.token === "idCard") {
    req.user = { id: 2, name: "Manikandan Anbalagan the incharge" };
    next();
  } else {
    res.status(401).send("Unauthorized!!!!");
  }
}

app.use(logRequest);
app.use("/mentor", mentorMessage);
app.use("/student", studentMessage);
app.use("/secure", testAuthentication);

app.get("/secure/profile", (req, res) => {
  res.send(`Hey, from ${req.user.name}`);
});

app.get("/mentor", (req, res) => {
  res.send("Hello, from mentor!!!!");
});

app.get("/student", (req, res) => {
  res.send("Hello, from student!!!!");
});

app.put("/mentor/mentorPut", (req, res) => {
  res.send("Hello, from mentor PUT!!!!");
});

app.post("/student/studentPost", (req, res) => {
  res.send("Hello, from student POST!!!!");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
