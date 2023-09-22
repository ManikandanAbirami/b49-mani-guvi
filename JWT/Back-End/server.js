const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");

const Customer = require("./models/Customer");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

//Connect to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = new Customer({ username, password: hashedPassword });

  try {
    await customer.save();
    res.json({ message: "User Registered Successfully!!!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while registering the user!" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const customer = await Customer.findOne({ username });

  if (!customer) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! User does not exists." });
  }

  const passwordMatch = await bcrypt.compare(password, customer.password);

  if (!passwordMatch) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! Password does not match." });
  }

  const token = jwt.sign(
    { username: customer.username, role: "Mentor" },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.get("/api/home", (req, res) => {
  res.json({ message: "Home page accessed successfully!!!" });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
