import authorService from "../services/authorService.js";

export const createAuthor = async (req, res) => {
  try {
    const { name } = req.body;
    const author = await authorService.addAuthor(name);
    res.status(200).json({
      success: true,
      author: author,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getAuthors = async (req, res) => {
  try {
    const authors = await authorService.getAuthors();
    res.status(200).json({
      success: true,
      authors: authors,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await authorService.deleteAuthor(id);
    res.status(200).json({
      success: true,
      author: author,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
