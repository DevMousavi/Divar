import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../public/Logo.svg";

const HeaderAdmin = () => {
    return (
        <header className="container border-b border-solid border-gray-400 flex flex-row-reverse items-center justify-between h-14">
            <button className="btnPrimary hover:hoverBtn">پروفایل</button>
            <h1 className="text-primaryColor font-bold text-xl cursor-default">
                صفحه ی مدیریت
            </h1>
            <Link to="/panel-admin-home">
                <img src={logo} alt="LOGO.PNG" className="w-12 h-12" />
            </Link>
        </header>
    );
};

export default HeaderAdmin;
