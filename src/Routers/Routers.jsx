import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import SingUp from "../Pages/Auth/SingUp.jsx";
import Login from "../Pages/Auth/Login.jsx";

import HomePage from "../Pages/HomePage.jsx";
import { getProfile } from "../services/getProfile.js";
import AdminHomePage from "../Pages/AdminPanel/AdminHomePage.jsx";
import AdvertisementRegistration from "../Pages/AdvertisementRegistration.jsx";
import UserProfile from "../Pages/UserProfile.jsx";
import ErrorHandler from "../Pages/ErrorHandler.jsx";
import Support from "../Pages/Support.jsx";
import AboutProduct from "../Pages/AboutProduct.jsx";

const Routers = () => {
    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
    });
    console.log({ data, isLoading, isError, error, isFetching });
    if (isLoading) return <h1>Loading...</h1>;

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/chat-with-support" element={<Support />} />
                <Route path="/about-product/:id" element={<AboutProduct />} />
                <Route
                    path="/panel-admin-home"
                    element={
                        data && data.role === "ADMIN" ? (
                            <AdminHomePage />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                <Route
                    path="/advertisement-registration"
                    element={<AdvertisementRegistration />}
                />
                <Route path="*" element={<ErrorHandler />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
