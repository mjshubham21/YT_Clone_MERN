import express from "express";
import {} from "../controllers/auth.js";

const router = express.Router();
//Create a new user.
router.post("/signup", signup);
//Sign in a user.
router.post("/signin", signin);

//Google Sign in authentication.
router.post("/google", googleLogin);
export default router;
