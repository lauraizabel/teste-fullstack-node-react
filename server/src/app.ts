import express from "express";
import cors from "cors";
import routes from "./routes";
import { createConnection } from "typeorm";
import config from "./config/db";

const app = express();

app.use(cors());
app.use(express.json({}));
app.options("/", cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port);

createConnection(config)
  .then((_connection) => {
    console.log("Server is running on port", port);
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
  });
