import { Router, Request, Response } from "express";

let todos = [
  { id: 1, title: "Ir a vacunarme", complete: false },
  { id: 2, title: "Terminar la tesis", complete: false },
  { id: 3, title: "Estudiar GIT", complete: true },
];

const todoRouter = Router();

todoRouter.post("/", async (request: Request, response: Response) => {
    try {
        if (!request.body || !request.body.title) {
            response.status(404).send({ message: "El todo necesita un título" });
        } else {
            const newTodo = {
                id: todos.length + 1,
                title: request.body.title,
                complete: false,
            };
            todos.push(newTodo);
            response.status(200).send(newTodo);
        }
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send({ message: "Server error, contact to the admin", error });
    }
});

todoRouter.get("/", async (request: Request, response: Response) => {
    try {
        response.status(200).send(todos);
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send({ message: "Server error, contact to the admin", error });
    }
});



export default todoRouter;
