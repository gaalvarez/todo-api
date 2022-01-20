import { Router, Request, Response } from "express";

const todoRouter = Router();

let todos = [
  { id: 1, title: "Ir a vacunarme", complete: false },
  { id: 2, title: "Terminar la tesis", complete: false },
  { id: 3, title: "Estudiar GIT", complete: true },
];

todoRouter.get("/", async (request: Request, response: Response) => {
  try {
    response.status(200).send([
      { id: 1, title: "Ir a vacunarme", complete: false },
      { id: 1, title: "Terminar la tesis", complete: false },
      { id: 1, title: "Estudiar GIT", complete: true },
    ]);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ message: "Server error, contact to the admin", error });
  }
});

todoRouter.put("/:idTodo", async (request: Request, response: Response) => {
  try {
    const idTodo = +request.params.idTodo;
    todos = todos.map((item) => {
      if (idTodo === item.id) {
        return { ...item, title: request.body.title };
      } else {
        return item;
      }
    });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ message: "Server error, contact to the admin", error });
  }
});

export default todoRouter;
