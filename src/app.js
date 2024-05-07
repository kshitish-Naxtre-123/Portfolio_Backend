import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/todo", todoRoutes);

export { app };
