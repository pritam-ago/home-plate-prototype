import { sendOtp } from "../utils/sendOTP.js";
import { verifyOtp } from "../utils/verifyOTP.js";
import User from "../models/User.js";

export const sendOtpController = async (req, res) => {
    let { phoneNumber } = req.body;
  
    try {
      phoneNumber = Number(phoneNumber.replace(/^\+/, ''));
  
      const user = await User.findOne({ phone_number: phoneNumber });
  
      if (!user) {
        return res.status(400).json({ message: "User doesn't exist. Please sign up." });
      }
  
      const status = await sendOtp(`+${phoneNumber}`);
      res.status(200).json({ message: "OTP sent", status });
    } catch (err) {
      console.error("Send Error:", err);
      res.status(500).json({ error: "Failed to send OTP" });
    }
  };
  
export const verifyOtpController = async (req, res) => {
    const { phoneNumber, otp } = req.body;
  
    try {
      const verification = await verifyOtp(phoneNumber, otp);
  
      if (verification.status === "approved") {
        phoneNumber = Number(phoneNumber.replace(/^\+/, ''));
  
     
      const user = await User.findOne({ phone_number: phoneNumber });
  
        if (!user) {
          res.json({ message: "Create a new profile" });
        }

        res.status(200).json({ message: "OTP verified", user });
      } else {
        res.status(400).json({ error: "Invalid OTP" });
      }
    } catch (error) {
      console.error("OTP Verify Error:", error);
      res.status(500).json({ error: "OTP verification failed" });
    }
  };

export const createUserController = async (req, res) => {
    const { phoneNumber, name, email, gender, address, date_of_birth  } = req.body;
    
    try {
        const user = new User({
            phone_number: phoneNumber,
            username: name,
            email,
            gender,
            address,
            date_of_birth,
        });
        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("User Creation Error:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
}