import express from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodo,
  getRecentTodos,
  getTodoById,
  updateTodoById,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").post(createTodo);
router.route("/get-todos").get(getAllTodo);
router.route("/recent-todos").get(getRecentTodos);
router.route("/:id/todo").get(getTodoById);
router.route("/:id/update").put(updateTodoById);
router.route("/:id/delete").delete(deleteTodoById);

export default router;
