import React, { useRef } from "react";
import HeaderAuth from "./HeaderAuth";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/Config";

const Login = () => {
    const phoneNumber = useRef(null);
    const passwordUser = useRef(null);

    const mutation = useMutation({
        mutationFn: async (userInformation) => {
            const req = await api.post("/auth/login", userInformation);
            return req;
        },
        onSuccess: (res) => {
            console.log(res);
        },
        onError: (err) => {
            console.log(err);
        },
    });

    const submitHandler = (even) => {
        even.preventDefault();

        const userInformation = {
            phone: phoneNumber.current.value,
            password: passwordUser.current.value,
        };

        mutation.mutate({
            phone: "09131211512",
            password: "123456789",
        });

        console.log({
            data: mutation.data,
            isError: mutation.isError,
            error: mutation.error,
            isLoading: mutation.isLoading,
            isFetching: mutation.isFetching,
        });
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
