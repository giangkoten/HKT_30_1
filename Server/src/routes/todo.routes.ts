import { Router } from "express";
import {
  getAll,
  createOne,
  deleteOne,
  putOne,
} from "../controllers/todo.controller";

const router = Router();

router.get("/", getAll);
router.post("/", createOne);
router.delete("/:id", deleteOne);
router.put("/:id", putOne);

export default router;
