import express from "express";
import { connectDB } from "./config/connectDB.js";
import userRouter from "./routes/user.routes.js";

import dotenv from "dotenv";

dotenv.config();
const app = express();



app.use(express.json());
app.use("/api/users", userRouter);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(
      `Server started and running on http://${process.env.HOST}`
    )
);


//import { run } from './utils/producer.js'

//producer().catch(console.error)

//run().catch(console.error)



