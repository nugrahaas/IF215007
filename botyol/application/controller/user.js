import User from "../models/user.js";
import bycrypt from "bcryptjs";

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const user = new User ({
      name,
      email,
    });
  
    try {
      await user.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({user})
  };