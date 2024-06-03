import React, { useRef } from "react";
import HeaderAuth from "./HeaderAuth";

const Login = () => {
    const phoneNumber = useRef(null);
    const passwordUser = useRef(null);

    const submitHandler = (even) => {
        even.preventDefault();
        console.log(even);

        const data = {
            phone: phoneNumber.current.value,
            password: passwordUser.current.value,
        };
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
