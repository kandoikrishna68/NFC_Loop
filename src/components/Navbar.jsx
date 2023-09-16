import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const Navbar = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/users/me");
        const data = response.data;
        console.log("Data received:", data); // Add this line to check the data

        // Check if data and data.user are defined before setting the name
        if (data && data.user) {
          setName(data.user);
          console.log("Name:", data.user);
        } else {
          console.error("Data or data.user is undefined.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  console.log("Name state:", name); // Add this line to check the name state

  return (
    <div className="n-wrapper">
      <div className="Nav1">
        <div className="n-name">MINTAX</div>
      </div>
      <div className="Nav2">
        <div className="links">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About us</li>
            <li>Description</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <Link to="/login" style={{ marginRight: "10px" }}>
          <Button
            bg={"blue.600"}
            color={"palegoldenrod"}
            _hover={{
              bg: "blue.700",
              color: "white",
            }}
          >
            {name || "Login/Sign-Up"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
