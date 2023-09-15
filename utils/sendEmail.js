// import { send } from "express/lib/response";
import nodemailer from "nodemailer";

const { AUTH_EMAIL, AUTH_PASS } = process.env;

let transporter = nodemailer.createTransport({
  service: "Hotmail",
  // secureConnections: false,
  // secure: false,
  auth: {
    user: "meetkhatri7777@hotmail.com",
    pass: "fdynggkqdzfxvdbs",
    // method: "LOGIN",
  },
  // tls: {
  //   ciphers: "TLSv1.2",
  // },
  // logger: true,
  // debug: true,
});

// test transporter

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for messages");
  }
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return;
  } catch (error) {
    throw error;
  }
};

export default sendEmail;