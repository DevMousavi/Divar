import React from "react";
import { api } from "../../services/Config";

const Login = () => {
    const fetchData = async () => {
        try {
            const req = await api.post("/auth/login", {
                phone: "09131211512",
                password: "123456789",
            });
            console.log(req);
        } catch (error) {
            console.log(error);
        }
    };

    const userData = async () => {
        try {
            const request = await api.get("/users/get-me");
            console.log(request);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1> Login Page</h1>
            <button
                onClick={fetchData}
                className=" bg-red-700 mt-4 flex text-white px-4 py-1 rounded-md mx-auto"
            >
                Login
            </button>
            <button
                onClick={userData}
                className=" bg-gray-700 mt-4 flex text-white px-4 py-1 rounded-md mx-auto"
            >
                Get Profile
            </button>
        </>
    );
};

export default Login;
