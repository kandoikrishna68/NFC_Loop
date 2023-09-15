import { OTP } from "../models/otp.js";
import generateOTP from "../utils/generateOTP.js";
import bcrypt from "bcrypt";
import sendEmail from "../utils/sendEmail.js";

export const verifyOTP = async ({ email, otp }) => {
  try {
    if (!(otp && email)) {
      throw Error("Provide values of email,otp");
    }

    // fiding otp in database
    const matchedOTPRecord = await OTP.findOne({
      email,
    });

    // emsure otp record exists

    if (!matchedOTPRecord) {
      throw Error("No OTP reord found");
    }

    // checking for expired code
    const { expiresAt } = matchedOTPRecord;
    if (expiresAt < Date.now()) {
      await OTP.deleteOne({ email });
      throw Error("This code is expired ,  request for a new one");
    }

    // not expires yet , verify the value
    const hashedOTP = matchedOTPRecord.otp;
    const match = bcrypt.compare(otp, hashedOTP);
    return match;
  } catch (error) {
    throw error;
  }
};

export const sendOTP = async ({ email, duration = 1 }) => {
  try {
    if (!email) {
      throw Error("Provide value for email");
    }
    // deleting the previous generated otp of same email
    await OTP.deleteOne({ email });

    // generateOTP
    const generatedOTP = generateOTP();

    // send mail
    const mailOptions = {
      from: "meetkhatri7777@hotmail.com",
      to: email,
      subject: `Verfication Of Your Account`,
      text: `This One Time Password is only valid for 1 hour`,
      html: `<p> your one time password for verifiction :${generatedOTP}</p>`,
    };
    await sendEmail(mailOptions);

    const hashedOtp = await bcrypt.hash(generatedOTP, 10);

    const newOTP = await new OTP({
      email,
      otp: hashedOtp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000 * +duration,
    });

    const createdOTPRecord = await newOTP.save();
    return createdOTPRecord;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const deleteOTP = async (email) => {
  try {
    await OTP.deleteOne({ email });
  } catch (error) {
    throw error;
  }
};
