import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addAuthor = async (name) => {
  try {
    const newlyCreateduser = await prisma.author.create({
      data: {
        name,
      },
    });
    return newlyCreateduser;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getAuthors = async () => {
  try {
    const authors = await prisma.author.findMany();
    return authors;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const deleteAuthor = async (id) => {
  try {
    const deletedAuthor = await prisma.author.delete({
      where: { id: Number(id) },
      include: { books: true },
    });
    return deletedAuthor;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export default { addAuthor, getAuthors, deleteAuthor };
