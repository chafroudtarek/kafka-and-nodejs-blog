import User from "../models/User.js";
import {run} from "../utils/producer.js";


export const postUser = async (req, res) => {
  try {
    const newUser = new User(req.body);

    if (
      !req.body.email
    ) {

      res.status(400).send({ message: "ERROR MISSING FIELD" });
      return;
    }
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(400).send({ message: "ERROR USER ALREADY EXIST" });
      return;
    }
    const response = await newUser.save();
    res.send({ response: response, message: "User successfully created" });
  
   run(response);
   
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

