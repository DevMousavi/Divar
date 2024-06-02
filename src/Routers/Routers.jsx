import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SingUp from "../Pages/Auth/SingUp.jsx";
import Login from "../Pages/Auth/Login.jsx";

import HomePage from "../Pages/HomePage.jsx";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
