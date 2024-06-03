import "./HeaderAuth.css";

import React from "react";
import { NavLink } from "react-router-dom";

const HeaderAuth = () => {
    return (
        <header className="w-80 flex justify-around items-center mt-14 mx-auto primaryBoxShadow rounded-xl px-0 py-5">
            <NavLink
                to="/sing-up"
                className="text-black bg-slate-100 w-24 h-8 flex items-center justify-center border-2 border-solid border-primaryColor rounded-lg opacity-55"
            >
                ثبت نام
            </NavLink>
            <NavLink
                to="/login"
                className="text-black bg-slate-100 w-24 h-8 flex items-center justify-center border-2 border-solid border-primaryColor rounded-lg opacity-55"
            >
                ورود
            </NavLink>
        </header>
    );
};

export default HeaderAuth;
