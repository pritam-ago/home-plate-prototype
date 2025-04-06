// utils/sendOTP.js

import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = twilio(accountSid, authToken);

export const sendOtp = async (phoneNumber) => {
  const verification = await client.verify.v2
    .services(verifySid)
    .verifications.create({
      to: phoneNumber,
      channel: "sms",
    });

  return verification.status;
};
