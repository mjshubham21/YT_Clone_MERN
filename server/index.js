import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/users.js";
import commentRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

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

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).json({
    success: false,
    message,
    status,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  connect();
  console.log(`Server started on Port ${PORT}`);
});
