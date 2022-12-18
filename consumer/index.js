import express from "express";
import { connectDB } from "./config/connectDB.js";


import dotenv from "dotenv";


const app = express();
dotenv.config();


app.use(express.json());


//
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(
      `Server started and running on http://${process.env.HOST}:${PORT}`
    )
);


import { run } from './utils/consumer.js'
//import { run as producer } from './utils/kafka.js'

//producer().catch(console.error)

run().catch("errooor",console.error)



