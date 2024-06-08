import React from "react";
import AlertLogin from "../Components/AlertLogin.jsx";
import Header from "../LayOut/Header.jsx";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/getProfile.js";
import { convertToPersianNumbers } from "../Helpers/convertToPersianNumbers.js";
import { getCookies } from "../Utils/getCookies.js";

const UserProfile = () => {
    const token = getCookies("refreshToken");
    if (token === false) {
        return <AlertLogin />;
    }

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
    });

    data && console.log({ data, isLoading, isError, error, isFetching });

    if (data) {
        return (
            <>
                <Header />
                <div className="container flex flex-row items-center justify-between mt-10 border-b border-solid border-gray-100">
                    <p className="cursor-default text-primaryGray text-xs">
                        مشخصات کاربری
                    </p>
                    <p className="cursor-default text-primaryGray text-xs">
                        اطلاعات دیگر
                    </p>
                </div>
                <main className="container mt-6 flex flex-row gap-30">
                    <div className="w-80 border-l border-solid border-gray-200 text-sm flex flex-col items-start gap-6 justify-center">
                        <span className="flex flex-row items-center justify-center gap-2 text-sm text-gray-600">
                            <p className="font-bold text-primaryColor">
                                {" "}
                                {data.role === "ADMIN" ? "مسیولیت :" : "کاربر"}
                            </p>
                            <p className="font-bold text-primaryColor">
                                {data.role === "ADMIN" ? "مدیر" : "عادی"}
                            </p>
                        </span>
                        <span className="flex flex-row items-center justify-center gap-2 text-sm text-gray-600">
                            <p className="font-bold">نام کاربری :</p>
                            <p className="text-xs">{data.username}</p>
                        </span>
                        <span className="flex flex-row items-center justify-center gap-2 text-sm text-gray-600">
                            <p className="font-bold">شماره تماس :</p>
                            <p className="text-xs">
                                {convertToPersianNumbers(data.phone)}
                            </p>
                        </span>
                        <span className="flex flex-row items-center justify-center gap-2 text-sm text-gray-600">
                            <p className="font-bold">شهر :</p>
                            <p className="text-xs">{data.city}</p>
                        </span>
                    </div>
                    <div></div>
                </main>
            </>
        );
    }
};

export default UserProfile;
