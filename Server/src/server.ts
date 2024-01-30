import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port: number = 8080;

dotenv.config();

import todoRouter from "./routes/todo.routes";

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//
app.use("/api/v1/todo", todoRouter);

//
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
