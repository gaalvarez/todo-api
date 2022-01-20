import { Router, Request, Response } from "express";

let todos = [
    { id: 1, idEvent: 1,type:"modify" },

];

const eventRouter = Router();


eventRouter.get("/", async (request: Request, response: Response) => {
    try {
        response.status(200).send(todos);
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send({ message: "Server error, contact to the admin", error });
    }
});



export default eventRouter;
