import React from "react";
import { Link } from "react-router-dom";

const AlertLogin = () => {
    return (
        <main>
            <div>
                <p>لطفا ابتدا به حساب کاربری خود وارد شود</p>
                <Link to="/login">صفحه ورود</Link>
            </div>
        </main>
    );
};

export default AlertLogin;
