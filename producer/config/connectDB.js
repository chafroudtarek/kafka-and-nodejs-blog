import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
export const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("DATABASE(MONGODB) is Connected");
    })
    .catch((e) => {
      console.log(" DATABASE(MONGODB) can not Connected",e);
    });
};
