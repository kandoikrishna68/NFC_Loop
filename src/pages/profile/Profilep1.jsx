import React, { useState } from "react";
import axios from "axios";

function Profilep1() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    age: "",
    occupation: "",
    gender: "",
    income: 0,
    scheme: "none",
    scheme_investment: 0,
  });

  const [taxInfo, setTaxInfo] = useState({
    fullName: "",
    taxableIncome: 0,
    finalTax: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/profile/createProfile", profileData);
      if (response.data.success) {
        // Display a success alert when data is submitted successfully
        window.alert("Profile created successfully");
        // Clear the form or perform other actions if needed
        setProfileData({
          fullName: "",
          age: "",
          occupation: "",
          gender: "",
          income: 0,
          scheme: "none",
          scheme_investment: 0,
        });
      } else {
        console.error("Profile creation failed");
      }
    } catch (error) {
      console.error("Profile creation error:", error);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("/profile/calculate", {
        fullName: profileData.fullName,
      });

      if (response.data.success) {
        setTaxInfo({
          ...taxInfo,
          fullName: profileData.fullName,
          taxableIncome: response.data.taxable_income,
          finalTax: response.data.final_tax,
        });
      } else {
        console.error("Tax calculation failed");
      }
    } catch (error) {
      console.error("Tax calculation error:", error);
    }
  };

  return (
    <div className="pbig">
      <div className="Profiledetails">
        <h1>Profile Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={profileData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Occupation</label>
            <input
              type="text"
              className="form-control"
              name="occupation"
              value={profileData.occupation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Income</label>
            <input
              type="number"
              className="form-control"
              name="income"
              value={profileData.income}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Scheme</label>
            <select
              className="form-select"
              name="scheme"
              value={profileData.scheme}
              onChange={handleChange}
            >
              <option value="none">None</option>
              <option value="PPF">PPF</option>
              <option value="Tuition_fees">Tuition Fees</option>
              <option value="EPF">EPF</option>
              <option value="Home_loan">Home Loan</option>
              <option value="life_insurance">Life Insurance</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Scheme Investment</label>
            <input
              type="number"
              className="form-control"
              name="scheme_investment"
              value={profileData.scheme_investment}
              onChange={handleChange}
            />
          </div>

          {/* ... (other form fields) */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="deductiondetails">
        <h2>Deduction Details:</h2>
        <form>{/* Add other deduction-related fields here */}</form>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Calculate Tax
        </button>
      </div>

      <p>This is your final tax amount after deductions:</p>
      <div>
        <p>Full Name: {taxInfo.fullName}</p>
        <p>Taxable Income: {taxInfo.taxableIncome}</p>
        <p>Final Tax: {taxInfo.finalTax}</p>
      </div>
    </div>
  );
}

export default Profilep1;
