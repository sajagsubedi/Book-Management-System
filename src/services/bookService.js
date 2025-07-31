import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addBook = async (title, publishedDate, authorId) => {
  try {
    const newBook = await prisma.book.create({
      data: {
        title,
        publishedDate,
        author: {
          connect: { id: authorId },
        },
      },
      include: { author: true },
    });
    return newBook;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getAllBooks = async () => {
  try {
    const allBooks = await prisma.book.findMany({ include: { author: true } });
    return allBooks;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const updateBook = async (id, newTitle) => {
  try {
    const updatedBook = await prisma.book.update({
      where: { id: parseInt(id) },
      data: {
        title: newTitle,
      },
      include: { author: true },
    });
    return updatedBook;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getBookById = async (id) => {
  try {
    const book = await prisma.book.findFirst({
      where: { id: parseInt(id) },
      include: { author: true },
    });
    return book;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteBookById = async (id) => {
  try {
    const deletedBook = await prisma.book.delete({
      where: { id: parseInt(id) },
      include: { author: true },
    });
    return deletedBook;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default {
  addBook,
  getAllBooks,
  updateBook,
  getBookById,
  deleteBookById,
};
