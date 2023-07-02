import mongoose from "mongoose";
import User from "../models/user.js";

export const signup = async (req, res) => {
    try{
        const newUser= new User(req.body);
    }catch(err){

    }
};
export const signin = async (req, res) => {};
export const google = async (req, res) => {};
