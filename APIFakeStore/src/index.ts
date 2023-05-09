import express from "express";
import * as dotenv from "dotenv";
import { router } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
dotenv.config();

const app = express();
app.use(express.json());


app.use("/", router);
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
