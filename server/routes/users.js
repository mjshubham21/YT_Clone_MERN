import express from "express";
import {
  deleteUser,
  getUser,
  subscribe,
  update,
  unsubscribe,
  like,
  dislike,
} from "../controllers/User.js";
import { get } from "mongoose";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get user
router.get("/find/:id", getUser);

//subscribe user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe user
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/disike/:videoId", verifyToken, dislike);

export default router;
