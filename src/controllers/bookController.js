import bookService from "../services/bookService.js";

export const createBook = async (req, res) => {
  try {
    const { title, publishedDate, authorId } = req.body;

    const newBook = await bookService.addBook(title, publishedDate, authorId);

    res.status(200).json({
      success: true,
      book: newBook,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({ success: true, books });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { title } = req.body;
    const { id } = req.params;

    const updatedBook = await bookService.updateBook(id, title);

    res.status(200).json({
      success: true,
      book: updatedBook,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    res.status(200).json({ success: true, book });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookService.deleteBookById(id);
    res.status(200).json({ success: true, book: deletedBook });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
