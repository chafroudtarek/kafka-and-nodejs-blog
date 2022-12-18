import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    username: {
      type: String,
    },
    

    email: {
      type: String,
      trim: true,
      required: "email is required",
      unique: "email already registered",
      match: [/.+\@.+\..+/, "Valid email required"],
    },
  }

);

export default mongoose.model("user", userSchema);
