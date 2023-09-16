import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Successful login, you can redirect or perform actions here
        console.log("Login successful");
      } else {
        // Handle login error, e.g., display an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="loginpg">
      <div className="login">
        <div>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
        <div>
          <Link to="/signup">Create a new account</Link>
        </div>
        <div>
          <Link to="/forgotpassword">Forgot password</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
