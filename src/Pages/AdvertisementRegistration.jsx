import React, { useEffect, useState } from "react";
import { getCookies } from "../Utils/getCookies";
import AlertLogin from "../Components/AlertLogin.jsx";

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
        return <div>AdvertisementRegistration</div>;
    }
};

export default AdvertisementRegistration;
