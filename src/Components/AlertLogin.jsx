import React from "react";
import { Link } from "react-router-dom";
import Header from "../LayOut/Header";

const AlertLogin = () => {
    return (
        <>
            <Header />
            <main>
                <div className="flex flex-col items-center justify-center gap-10 w-96 h-60 mx-auto mt-14 border-2 border-solid border-primaryColor rounded-md boxShadow">
                    <p className="font-bold cursor-default">
                        لطفا ابتدا به حساب کاربری خود وارد شود
                    </p>
                    <Link to="/login" className="btnPrimary hover:hoverBtn">
                        صفحه ورود
                    </Link>
                </div>
            </main>
        </>
    );
};

export default AlertLogin;
