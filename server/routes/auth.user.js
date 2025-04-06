import express from 'express';
import User from '../models/User.js';
import { sendOtpController, verifyOtpController, createUserController } from '../controllers/auth.user.controller.js';

const router = express.Router();

router.post("/send-otp", sendOtpController);
router.post("/verify-otp", verifyOtpController);
router.post("/create-user", createUserController);

export default router;