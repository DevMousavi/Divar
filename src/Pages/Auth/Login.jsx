import React, { useRef } from "react";
import HeaderAuth from "./HeaderAuth";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/Config";

const Login = () => {
    const phoneNumber = useRef(null);
    const passwordUser = useRef(null);

    const { mutate } = useMutation({
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
                onSuccess: (data) => console.log("My Data", data),
                onError: (error) => console.log("My Error", error),
            }
        );
    };

    return (
        <>
            <HeaderAuth />
            <main>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="phoneNumber">
                            لطفا شماره تماس خود را وارد کنید
                        </label>
                        <input
                            type="number"
                            id="phoneNumber"
                            ref={phoneNumber}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            لطفا رمز عبور خود را وارد کنید
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordUser}
                        />
                    </div>
                    <button type="submit">ورود</button>
                </form>
            </main>
        </>
    );
};

export default Login;
