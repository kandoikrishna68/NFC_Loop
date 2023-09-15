import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
    image: String, // Consider adding validation for the image field if needed
    scheme: {
        type: String,
        required: true,
        default:"none",
        enum: ["PPF", "Tuition_fees", "EPF", "Home_loan", "none", "life_insurance"],
    },
    scheme_investment:{
        type: Number,
        default: 0,
    },
    schemeSection: {
        type: String,
        required: true,
        default: "80C",
    },
    initial_tax: {
        type: Number,
        default: 0, // Set a default value for the tax field
    },
});

export const Profile = mongoose.model("Profile", profileSchema);
