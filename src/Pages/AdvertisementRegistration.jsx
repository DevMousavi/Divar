import React, { useEffect, useState } from "react";
import { getCookies } from "../Utils/getCookies";
import AlertLogin from "../Components/AlertLogin.jsx";
import Header from "../LayOut/Header.jsx";

const AdvertisementRegistration = () => {
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        const registerUser = getCookies("refreshToken");
        console.log(registerUser);
        if (!registerUser) {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
    }, []);

    if (isDone) {
        return <AlertLogin />;
    } else if (!isDone) {
        return (
            <>
                <Header />
                <div>AdvertisementRegistration</div>
            </>
        );
    }
};

export default AdvertisementRegistration;
