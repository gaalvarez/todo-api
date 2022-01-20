import { Router } from "express";
import todoRouter from "./todo/todo.controller";

const routes = Router();

routes.use("/todo", todoRouter);

export default routes;
