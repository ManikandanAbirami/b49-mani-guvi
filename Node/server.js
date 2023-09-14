const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from API!!");
});

app.get("/dosa", (req, res) => {
  res.send("Hello, guvi - from home page!!!!");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
