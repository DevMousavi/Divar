import React, { useRef, useState } from "react";
import HeaderAuth from "./HeaderAuth";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/Config";
import { setCookies } from "../../Utils/setCookies";

const Login = () => {
    const [textAlert, setTextAlert] = useState("jadfgkhdjgf");
    const [isAlert, setIsAlert] = useState(false);

    const phoneNumber = useRef(null);
    const passwordUser = useRef(null);

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const req = await api.post("/auth/login", data);
            return req;
        },
    });

    const submitHandler = (even) => {
        even.preventDefault();

        const userInformation = {
            phone: phoneNumber.current.value,
            password: passwordUser.current.value,
        };

        mutate(
            {
                phone: "09131211512",
                password: "123456789",
            },
            {
                onSuccess: (data) => {
                    if (data.status === 200 || data.status === 201) {
                        console.log(data);
                        setCookies("accessToken", data.data.newAccessToken);
                        setCookies("refreshToken", data.data.newRefreshToken);

                        setTextAlert("ورود با موفقیت انجام شد");
                        setIsAlert(true);
                        setTimeout(() => {
                            setIsAlert(false);
                        }, 3000);
                    }
                },
                onError: (error) => console.log("My Error", error),
            }
        );
    };

    if (isPending) return <h1>IsLoading...</h1>;

    return (
        <>
            <HeaderAuth />
            <main>
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
                            ref={phoneNumber}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
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
                            ref={passwordUser}
                            className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primaryColor text-white font-bold w-16 h-10 mt-5 mx-auto flex items-center justify-center rounded-md border-solid border-2 primary-transition hover:hoverBtn"
                    >
                        ورود
                    </button>
                </form>
                <p
                    className={`${
                        isAlert ? "flex" : "hidden"
                    } absolute top-1 left-1 rounded-lg rounded-tl-none bg-primaryColor text-white font-bold px-5 py-2`}
                >
                    {textAlert}
                </p>
            </main>
        </>
    );
};

export default Login;
