import { Router, Request, Response } from "express";

let todos = [
  { id: 1, idEvent: 1, type: "modify" },
];

const eventRouter = Router();

eventRouter.post("/", async (request: Request, response: Response) => {
    try {
        if (!request.body || !request.body.title) {
            response.status(404).send({ message: "El todo necesita un t�tulo" });
        } else {
            const newTodo = {
                id: todos.length + 1,
                idEvent: request.body.idEvent,
                type: request.body.type,
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

export default eventRouter;
