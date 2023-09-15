import mongoose from "mongoose";

const businessProfileSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
    },
    industryType: {
        type: String,
        required: true,
        enum:["standard", "reduced", "zero"],
    },
    annualRevenue: {
        type: Number,
        required: true,
    },
    employees: {
        type: Number,
        required: true,
    },
    businessExpenses: {
        type: Number,
        required: true,
    },
    gstRegistered: {
        type: Boolean,
        default: true,
    },
    gstNumber:{
        type: String,
    },
    initialTax: {
        type: Number,
        default: 0,
    },
});

export const BusinessProfile = mongoose.model("BusinessProfile", businessProfileSchema);
