import express from "express";
import cors from "cors";
import routes from "./routes";

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

app.listen(port, () => {
  console.log(`App listening at port ${port}.`);
});
