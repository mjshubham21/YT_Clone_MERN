import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();
    res.status(200).send("newUser created...");
  } catch (err) {
    next(err);
  }
};
export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name }); // find user by name
    if (!user) {
      return next(createError(404, "User not found"));
    }
    const isCorrect = await bcrypt.compare(req.body.password, user.password); // compare password
    if (!isCorrect) {
      return createError(400, "Wrong password");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...info } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(info);
  } catch (err) {
    next(err);
  }
};

// export const signin = async (req, res) => {};
export const googleLogin = async (req, res) => {};
