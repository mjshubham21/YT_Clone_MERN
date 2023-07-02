import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/users.js";
import commentRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

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

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  connect();
  console.log(`Server started on Port ${PORT}`);
});
