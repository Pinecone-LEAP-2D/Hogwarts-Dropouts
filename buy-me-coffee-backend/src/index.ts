import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { bankAccRouter } from "./routes/bankAccRouter";
import { donationRouter } from "./routes/donationRouter";
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.use("/", bankAccRouter);
app.use("/donation",donationRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
