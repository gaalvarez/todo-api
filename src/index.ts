import bodyParser from "body-parser";
import express from "express";
import routes from "./routes";

const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.contentType("application/json");
  next();
});

app.use("/api", routes);

const port = process.env.port || 80;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
