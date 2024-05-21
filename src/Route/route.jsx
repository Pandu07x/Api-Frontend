import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../components/home";
import About from "../components/Read data from JSon file";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import OTP from "../Pages/otp";
import Front from "../Pages/frontpage";
import Testing from "../components/testing";
//import { Navbar } from "react-bootstrap";


export default function Rout(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/services" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/" element={<Front />} />
            <Route path="/testing" element={<Testing />} />
            
        </Routes>
        </BrowserRouter>
        
    )
}