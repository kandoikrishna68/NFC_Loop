import { BusinessProfile } from "../models/business.js";

export const createBusinessProfile = async (req, res) => {
    const {
        businessName,
        industryType,
        annualRevenue,
        employees,
        businessExpenses,
        gstRegistered,
        gstNumber,
    } = req.body;

    const profile = await BusinessProfile.create({
        businessName,
        industryType,
        annualRevenue,
        employees,
        businessExpenses,
        gstRegistered,
        gstNumber,
    });

    res.json({
        success: true,
        message: "New business profile created",
        profile,
    });
};

export const calculateBusinessTax = async (req, res) => {
    const { gstNumber } = req.body;

    const businessProfile = await BusinessProfile.findOne({ gstNumber });

    if (!businessProfile) {
        return res.status(400).json({
            message: "Business profile not found, Please create a profile before calculating.",
        });
    }

    // Business tax calculation logic goes here based on your specific business tax rules,
    // considering GST information such as gstRegistered, gstNumber, and gstIncome.

    // Example calculation:
    let taxableIncome = businessProfile.annualRevenue - businessProfile.businessExpenses;
    let gstAmount = 0;
    // Apply GST calculations if the business is GST registered.
    if (businessProfile.gstRegistered) {
        // Your GST calculation logic here.
        // For simplicity, let's assume a 5% GST rate for this example.
        if (businessProfile.industryType === "standard"){
            gstAmount = 0.18 * taxableIncome;
        }
        else if (businessProfile.industryType === "reduced"){
            gstAmount = 0.05 * taxableIncome;
        }
        else if (businessProfile.industryType === "zero"){
            gstAmount = 0;
        }
    }

    // Your final tax calculation logic here.

    res.json({
        success: true,
        message: "Business tax calculated successfully",
        taxableIncome,
        gstAmount
        // Include relevant tax information here.
    });
};
