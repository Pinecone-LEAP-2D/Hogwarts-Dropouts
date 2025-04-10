import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { profileRouter } from "./routes/profileRouter";
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/profile", profileRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
