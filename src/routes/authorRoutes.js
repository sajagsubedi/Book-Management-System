import {
  createAuthor,
  getAuthors,
  deleteAuthor,
} from "../controllers/authorController.js";
import express from "express";

const router = express.Router();

router.get("/all", getAuthors);
router.post("/create", createAuthor);
router.delete("/:id", deleteAuthor);

export default router;
