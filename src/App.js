import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TaxCalculator from "./pages/TaxCalculator";
import Profilep1 from "./pages/profile/Profilep1";
import Navbar from "./components/Navbar";
import Sign from "./pages/Sign";
import Footer from "./components/Footer";
import Forgot from "./pages/Forgot";
import { ChakraProvider } from "@chakra-ui/react";
import Headerafterlog from "./pages/Headerafterlog";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/calculatetax" element={<TaxCalculator />}></Route>
          <Route path="/profile/part1" element={<Profilep1 />}></Route>
          <Route path="/signup" element={<Sign />}></Route>
          <Route path="/forgotpassword" element={<Forgot />}></Route>
          <Route path="/headerafterlogin" element={<Headerafterlog />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
