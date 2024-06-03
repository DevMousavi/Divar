import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import HeaderAuth from "./HeaderAuth.jsx";

import { api } from "../../services/Config.js";
import { setCookies } from "../../Utils/setCookies.js";

const Login = () => {
    const [textAlert, setTextAlert] = useState("");
    const [isAlert, setIsAlert] = useState(false);

    const phoneNumber = useRef(null);
    const passwordUser = useRef(null);

    // Use "useNavigate" to take the user to the "HomePage.jsx" page after successful registration
    const navigate = useNavigate();

    // Using "isPending" to manage "Loading"
    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const req = await api.post("/auth/login", data);
            return req;
        },
    });

    const submitHandler = (even) => {
        even.preventDefault();

        // Get user information from input using "useRef" as "Object"
        const userInformation = {
            phone: phoneNumber.current.value,
            password: passwordUser.current.value,
        };

        // Conditions for the safe sending of information to the server
        // Checking that the "input" is complete
        if (!phoneNumber.current.value || !passwordUser.current.value) {
            setTextAlert("شماره تماس و رمز عبور را وارد کنید");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        }

        mutate(userInformation, {
            onSuccess: (data) => {
                if (data.status === 200 || data.status === 201) {
                    setCookies("accessToken", data.data.newAccessToken); // Place cookies in the user's browser
                    setCookies("refreshToken", data.data.newRefreshToken); // Place cookies in the user's browser
                    setTextAlert("ورود با موفقیت انجام شد"); // Display a success message to the user
                    setIsAlert(true);
                    setTimeout(() => {
                        setIsAlert(false);
                        navigate("/"); // Move the user to the "HomePage.jsx" page.
                    }, 3000);
                }
            },
            onError: (error) => {
                // Display the message that the user's device is not connected to the Internet
                if (error.message === "Network Error") {
                    setTextAlert(
                        "احتمالا یکی پاش رفته رو سیم اینترنت پس بررسیش کن :)"
                    );
                    setIsAlert(true);
                    setTimeout(() => {
                        setIsAlert(false);
                    }, 7000);
                }
                // Display an error message if you did not register or entered information incorrectly
                if (error.response.status === 409) {
                    setTextAlert(
                        "کاربری با این شماره یافت نشد ، شماره تماس یا رمز عبور خود را بررسی کنید"
                    );
                    setIsAlert(true);
                    setTimeout(() => {
                        setIsAlert(false);
                    }, 5000);
                }
            },
        });
    };

    return (
        <>
            <HeaderAuth />
            <main>
                {isPending ? (
                    <div className="flex items-center justify-center w-80 h-60 mx-auto mt-5 primaryBoxShadow rounded-lg">
                        <span className="flex flex-col items-center gap-4 justify-center">
                            <p>در حال دریافت اطلاعات هستیم</p>
                            <p>لطفا صبور باشید</p>
                        </span>
                    </div>
                ) : (
                    <form
                        onSubmit={submitHandler}
                        className="w-80 h-60 mx-auto mt-5 rounded-lg primaryBoxShadow px-4 py-5"
                    >
                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className=" text-black opacity-65 text-sm"
                            >
                                لطفا شماره تماس خود را وارد کنید
                            </label>
                            <input
                                type="number"
                                id="phoneNumber"
                                name="phoneNumber"
                                ref={phoneNumber}
                                className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm "
                            />
                        </div>
                        <div className="mt-3">
                            <label
                                htmlFor="password"
                                className=" text-black opacity-65 text-sm "
                            >
                                لطفا رمز عبور خود را وارد کنید
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
                                autoComplete="new-password"
                                ref={passwordUser}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primaryColor text-white font-bold w-16 h-10 mt-5 mx-auto flex items-center justify-center rounded-md border-solid border-2 primary-transition hover:hoverBtn"
                        >
                            ورود
                        </button>
                    </form>
                )}
                <p
                    className={`${
                        isAlert ? "flex" : "hidden"
                    } absolute top-1 left-1 rounded-lg rounded-tl-none bg-primaryColor text-white font-bold w-80 px-5 py-1 items-center justify-center`}
                >
                    {textAlert}
                </p>
            </main>
        </>
    );
};

export default Login;
