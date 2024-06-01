import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SingUp from "../Pages/Auth/SingUp";
import HomePage from "../Pages/HomePage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/sing-up" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
