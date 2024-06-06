import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import HeaderAuth from "./HeaderAuth";

import { checkUserName } from "../../Helpers/checkName.js";
import { api } from "../../services/Config.js";
import { setCookies } from "../../Utils/setCookies.js";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
    const username = useRef(null);
    const phone = useRef(null);
    const city = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const [textAlert, setTextAlert] = useState("");
    const [isAlert, setIsAlert] = useState(false);

    const navigate = useNavigate();

    // Using "isPending" to manage "Loading"
    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const req = await api.post("/auth/register", data);
            return req;
        },
    });

    const submitHandler = (event) => {
        event.preventDefault();

        // Get user information from input using "useRef" as "Object"
        const userInformation = {
            username: username.current.value,
            phone: phone.current.value,
            city: city.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
        };

        // Conditions for the safe sending of information to the server
        if (
            !username.current.value ||
            !phone.current.value ||
            !password.current.value ||
            !confirmPassword.current.value ||
            !city.current.value
        ) {
            setTextAlert("اطلاعات کامل وارد نشده است");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (password.current.value !== confirmPassword.current.value) {
            setTextAlert("رمزها مطابقت ندارند");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (
            phone.current.value.length !== 11 ||
            !phone.current.value.startsWith("09")
        ) {
            setTextAlert("شماره تماس صحیح نیست");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (checkUserName(username.current.value)) {
            // The "checkUserName" function checks that the "userName" entered by the user is completely Farsi
            setTextAlert("نام کاربری می بایستی فارسی باشد");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (password.current.value.length < 8) {
            setTextAlert("رمز عبور باید حداقل 8 کاراکتر باشد");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        }

        mutate(userInformation, {
            onSuccess: (data) => {
                if (data.status === 201 || data.status === 200) {
                    setCookies("accessToken", data.data.accessToken); // Place cookies in the user's browser
                    setCookies("refreshToken", data.data.refreshToken); // Place cookies in the user's browser
                    setTextAlert(data.data.message);
                    setIsAlert(true);
                    setTimeout(() => {
                        setIsAlert(false);
                        navigate("/"); // Move the user to the "HomePage.jsx" page.
                    }, 3000);
                }
            },
            onError: (error) => {
                if (error.message === "Network Error") {
                    setTextAlert(
                        "احتمالا یکی پاش رفته رو سیم اینترنت پس بررسیش کن :)"
                    );
                    setIsAlert(true);
                    setTimeout(() => {
                        setIsAlert(false);
                    }, 7000);
                }
                if (error) {
                    setTextAlert(error.response.data.message); // Display an error message to the user (such as duplicate registration number)
                    setIsAlert(true);
                    setTimeout(() => {
                        setIsAlert(false);
                    }, 3000);
                }
            },
        });
    };

    return (
        <>
            <HeaderAuth />
            {isPending ? (
                <div className="w-80 h-[470px] mx-auto mt-5 rounded-lg primaryBoxShadow px-4 py-5 flex flex-col items-center justify-start gap-4">
                    <h2 className="mt-20">درحال ثبت اطلاعات هستیم</h2>
                    <h3>لطفا صبور باشید</h3>
                </div>
            ) : (
                <form
                    onSubmit={submitHandler}
                    className="w-80 h-[470px] mx-auto mt-5 rounded-lg primaryBoxShadow px-4 py-5"
                >
                    <div>
                        <label
                            htmlFor="userName"
                            className=" text-black opacity-65 text-sm"
                        >
                            نام کاربری خود را وارد کنید
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            ref={username}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm "
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="phoneNumber"
                            className=" text-black opacity-65 text-sm "
                        >
                            شماره تماس خود را وارد کنید
                        </label>
                        <input
                            type="number"
                            id="phoneNumber"
                            name="phoneNumber"
                            ref={phone}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm "
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="cityUser"
                            className=" text-black opacity-65 text-sm "
                        >
                            محل زندگی خود را وارد کنید
                        </label>
                        <select
                            name="city"
                            id="cityUser"
                            ref={city}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-2 text-gray-900 text-sm "
                        >
                            <option value="تهران">تهران</option>
                            <option value="مشهد">مشهد</option>
                            <option value="اصفهان">اصفهان</option>
                            <option value="یزد">یزد</option>
                            <option value="شیراز">شیراز</option>
                            <option value="تبریز">تبریز</option>
                            <option value="رشت">رشت</option>
                            <option value="آبادان">آبادان</option>
                            <option value="اهواز">اهواز</option>
                            <option value="اراک">اراک</option>
                            <option value="اردبیل">اردبیل</option>
                            <option value="بندرعباس">بندرعباس</option>
                            <option value="بیرجند">بیرجند</option>
                            <option value="بجنورد">بجنورد</option>
                            <option value="بوشهر">بوشهر</option>
                            <option value="چابهار">چابهار</option>
                            <option value="همدان">همدان</option>
                            <option value="ایلام">ایلام</option>
                            <option value="کرمان">کرمان</option>
                            <option value="کیش">کیش</option>
                            <option value="مازندران">مازندران</option>
                            <option value="ارومیه">ارومیه</option>
                            <option value="قزوین">قزوین</option>
                            <option value="قم">قم</option>
                            <option value="سنندج">سنندج</option>
                            <option value="سمنان">سمنان</option>
                            <option value="شهرکرد">شهرکرد</option>
                            <option value="ساری">ساری</option>
                            <option value="یاسوج">یاسوج</option>
                            <option value="زنجان">زنجان</option>
                            <option value="کرمانشاه">کرمانشاه</option>
                            <option value="گلستان">گلستان</option>
                            <option value="گرگان">گرگان</option>
                            <option value="خرم‌آباد">خرم‌آباد</option>
                            <option value="ساوه">ساوه</option>
                            <option value="زاهدان">زاهدان</option>
                            <option value="زنجان">زنجان</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label
                            htmlFor="password"
                            className=" text-black opacity-65 text-sm "
                        >
                            رمز عبور خود را وارد کنید
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={password}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="password"
                            className=" text-black opacity-65 text-sm "
                        >
                            رمز عبور خود را دوباره وارد کنید
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={confirmPassword}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
                            autoComplete="new-password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primaryColor text-white font-bold w-24 h-10 mt-5 mx-auto flex items-center justify-center rounded-md border-solid border-2 primary-transition hover:hoverBtn"
                    >
                        ثبت نام
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
        </>
    );
};

export default SingUp;
