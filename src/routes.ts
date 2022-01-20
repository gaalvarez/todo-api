import { Router } from "express";
import eventRouter from "./events/events.controller";
import todoRouter from "./todo/todo.controller";

const routes = Router();

routes.use("/todo", todoRouter);
routes.use("/event", eventRouter);

export default routes;
