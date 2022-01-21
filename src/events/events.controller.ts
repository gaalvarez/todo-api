import { Router, Request, Response } from "express";

let events = [{ id: 1, idEvent: 1, type: "modify" }];

const eventRouter = Router();

eventRouter.get("/all", async (request: Request, response: Response) => {
  try {
    response.status(200).send(events);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ message: "Server error, contact to the admin", error });
  }
});

eventRouter.post("/", async (request: Request, response: Response) => {
  try {
    if (!request.body || !request.body.title) {
      response.status(404).send({ message: "El todo necesita un t�tulo" });
    } else {
      const newTodo = {
        id: events.length + 1,
        idEvent: request.body.idEvent,
        type: request.body.type,
      };
      events.push(newTodo);
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
