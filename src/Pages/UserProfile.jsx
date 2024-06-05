import React, { useEffect, useState } from "react";
import { getCookies } from "../Utils/getCookies.js";
import AlertLogin from "../Components/AlertLogin.jsx";
import Header from "../LayOut/Header.jsx";

const UserProfile = () => {
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        const registerUser = getCookies("refreshToken");
        console.log(registerUser);
        !registerUser && setIsDone(true);
        registerUser && setIsDone(false);
    }, []);
    if (isDone) {
        return <AlertLogin />;
    } else if (!isDone) {
        return (
            <>
                <Header />
                <div>UserProfile</div>
            </>
        );
    }
};

export default UserProfile;
