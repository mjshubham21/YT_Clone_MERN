import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { createError } from "../error.js";

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
export const signin = async (req, res) => {};
export const googleLogin = async (req, res) => {};
