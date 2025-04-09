import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
