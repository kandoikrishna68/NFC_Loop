import { Profile } from "../models/profile.js";

export const createProfile = async (req, res) => {
    const { fullName, age, gender, occupation, income, scheme, scheme_investment} = req.body;
    await Profile.create({
        fullName,
        age,
        gender,
        occupation,
        income,
        scheme,
        scheme_investment
    });
    res.json({
        success: true,
        message: "New profile created",
    });
};

export const calculateTax = async (req, res) => {
    const { fullName } = req.body;

    const user = await Profile.findOne({ fullName });

    if (!user) {
        return res.status(400).json({
            message: "User not found, Please create a profile before calculating.",
        });
    }
    let taxable_income = user.income;
    if (user.income > 500000){
        taxable_income = user.income - 500000
    }

    //Least Useful people
    if (user.scheme === "none" && user.income > 500000){
        if (user.income < 750000) {
            user.initial_tax = 0.1 * taxable_income;
        } else if (user.income < 1000000) {
            user.initial_tax = 0.15 * taxable_income;
        } else if (user.income < 1250000) {
            user.initial_tax = 0.2 * taxable_income;
        } else if (user.income < 1500000) {
            user.initial_tax = 0.25 * taxable_income;
        } else if (user.income >= 1500000) {
            user.initial_tax = 0.3 * taxable_income;
        }
    }
    else if (user.scheme !== "none" && user.income > 500000){
        // Bahut ameer aur bahut jyada investment
        if(user.income > 650000 && user.scheme_investment > 150000){
            user.scheme_investment = 150000;
            taxable_income = taxable_income - user.scheme_investment;
        }
        // bahut ameer aur thodi investment
        else if (user.income > 650000 && user.scheme_investment < 150000){
            taxable_income = taxable_income - user.scheme_investment;
        }
        // thoda gareeb aur bahut investment 
        else if (user.income < 650000 && user.scheme_investment > 150000){
            user.scheme_investment = user_income - 500000;
            taxable_income = taxable_income - user.scheme_investment;
        }
        // thoda gareeb aur thodi investment
        else if (user_income < 6500000 && user.scheme_investment < 150000){
            if (user.scheme_investment > user_income - 500000){
                user.scheme_investment = user_income - 500000;
                taxable_income = taxable_income - user.scheme_investment;
            }
        }
    }
    const updatedUser = await Profile.findOneAndUpdate(
        { fullName: fullName },
        // { $set: { user.initial_tax: user.initial_tax } },
        { new: true } // This option returns the updated document
    );

    let final_tax = 0;
    if (taxable_income === 0){
        final_tax = 0;
    }else if(taxable_income < 250000) {
        final_tax = 0.1 * taxable_income;
    } else if (taxable_income < 500000) {
        final_tax = 0.15 * taxable_income;
    } else if (taxable_income < 750000) {
        final_tax = 0.2 * taxable_income;
    } else if (taxable_income < 1000000) {
        final_tax = 0.25 * taxable_income;
    } else if (taxable_income >= 1000000) {
        final_tax = 0.3 * taxable_income;
    }

    res.json({
        success: true,
        message: "Tax calculated and updated successfully",
        taxable_income,
        final_tax,
    });
};
