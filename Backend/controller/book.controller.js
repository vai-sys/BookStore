const Book = require('../model/book.model');

exports.getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
};

