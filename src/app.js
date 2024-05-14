import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import contactRoutes from './routes/contact.routes.js'
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://kshitish-portfolio.netlify.app",
    credentials: true,
  })
);

app.use("/api/todo", todoRoutes);
app.use("/api/contact", contactRoutes);

export { app };
// https://kshitish-portfolio.netlify.app
