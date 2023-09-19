const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

// const DB_URL = "mongodb://0.0.0.0:27017/admin";
const DB_URL = "mongodb://localhost:27017/admin";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedDate: String,
});

const Book = mongoose.model("Book", bookSchema);

app.use(bodyParser.json());

//Connect to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

// CREATE - Add a new book

app.post("/book", async (req, res) => {
  const book = new Book(req.body);
  try {
    const savedBook = await book.save();
    res.status(201).send(savedBook);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// READ - list of books

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(201).send(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/book/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// UPDATE - Add a new book

app.put("/book/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// UPDATE - Add a new book

app.delete("/book/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (result) res.status(201).send({ message: "Book deleted successfully!" });
    else res.status(404).send("Book not found");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
