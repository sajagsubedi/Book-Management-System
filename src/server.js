import express from "express";
import dotenv from "dotenv";
import authorRouter from "./routes/authorRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/author", authorRouter);

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
