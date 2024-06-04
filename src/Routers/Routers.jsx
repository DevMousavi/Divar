import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import SingUp from "../Pages/Auth/SingUp.jsx";
import Login from "../Pages/Auth/Login.jsx";

import HomePage from "../Pages/HomePage.jsx";
import { getProfile } from "../services/getProfile.js";
import AdminHomePage from "../Pages/AdminPanel/AdminHomePage.jsx";

const Routers = () => {
    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
    });
    console.log({ data, isLoading, isError, error, isFetching });
    if (isLoading) return <h1>Loading...</h1>;

    // If the user does not have a "refreshToken"
    // if (error.response.status === 409) {
    //     return (
    //         <>
    //             <h1>ابتدا وارد حساب کاربری خود شوید</h1>
    //         </>
    //     );
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="/login" element={<Login />} />
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
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
