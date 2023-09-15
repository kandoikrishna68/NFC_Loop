import express from "express";
import userRouter from "./routes/user.js";
import {config} from "dotenv";
import { errMiddleware } from "./middleware/error.js";
import cookieParser from "cookie-parser";
import otpRoutes from "./routes/otp.js";
import profileRouter from "./routes/profile.js";
import businessRouter from "./routes/business.js";

export const app = express();

config({
    path: "./data/config.env",
})

//Middleware to access req.body in JSON format.
app.use(express.json()); 
app.use(cookieParser()); 

app.use(errMiddleware);
app.use("/otp", otpRoutes);
app.use('/profile' , profileRouter)
app.use("/users", userRouter);
app.use("/businessUsers", businessRouter);

app.get("/", (req, res)=>{
    res.send("Hey, LOOP");
})
