import { Router, Request, Response } from "express";

let events = [{ id: 1, idEvent: 1, type: "modify" }];

const eventRouter = Router();

eventRouter.get("/todos", async (request: Request, response: Response) => {
  try {
    response.status(200).send(events);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ message: "Server error, contact to the admin", error });
  }
});

eventRouter.put("/idEvent", async (request: Request, response: Response) => {
  try {
    const idEvent = +request.params.idEvent;
    events = events.map((item) => {
      if (idEvent === item.id) {
        return { ...item, title: request.body.title };
      } else {
        return item;
      }
    });
    response.status(200).send({ message: "Evento actualizado" });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ message: "Server error, contact to the admin", error });
  }
});

export default eventRouter;
