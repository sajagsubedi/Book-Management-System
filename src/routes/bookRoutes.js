import express from "express";
import {
  createBook,
  getAllBooks,
  updateBook,
  getBookById,
  deleteBook
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/create", createBook);
router.get("/all", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
