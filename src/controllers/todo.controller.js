import Todo from "../models/todo.Model.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createTodo = asyncHandler(async (req, res) => {
  try {
    const { title, desc, dueDate } = req.body;

    const existingTodo = await Todo.findOne({ title, desc });
    if (existingTodo) {
      return res.status(400).json({
        message: "Todo with this title and description already exists.",
      });
    }

    const todo = new Todo({
      title,
      desc,
      dueDate,
    });
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getAllTodo = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getRecentTodos = asyncHandler(async (req, res) => {
  try {
    const recentTodos = await Todo.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(recentTodos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getTodoById = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const updateTodoById = asyncHandler(async (req, res) => {
  try {
    const { title, desc, dueDate } = req.body;
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({ message: "todo not found!" });
    }
    //update todo
    (todo.title = title), (todo.desc = desc), (todo.dueDate = dueDate);

    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const deleteTodoById = asyncHandler(async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.deleteOne({_id:todoId});
    res.status(200).json({ message: "Todo deleted successully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  createTodo,
  getAllTodo,
  getRecentTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
