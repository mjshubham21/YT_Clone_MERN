import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
      return process.exit(1);
    });
};

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  connect();
  console.log(`Server started on Port ${PORT}`);
});
