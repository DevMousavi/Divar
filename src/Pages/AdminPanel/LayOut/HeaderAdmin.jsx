import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../../public/Logo.svg";
import { IoMdClose } from "react-icons/io";
import { getProfile } from "../../../services/getProfile";
import { getRole } from "../../../Helpers/role";
import { convertToPersianNumbers } from "../../../Helpers/convertToPersianNumbers";

const HeaderAdmin = () => {
    const [isProfile, setIsProfile] = useState(false);
    const [profile, setProfile] = useState(null);

    const toggleProfile = () => {
        setIsProfile((prevState) => !prevState);
    };

    useEffect(() => {
        const fetchProfile = async () => {
            const whoAmI = await getProfile();
            setProfile(whoAmI);
        };

        fetchProfile();
    }, []);

    const toggleCategory = () => {
        setIsProfile((prevState) => !prevState);
    };

    return (
        <header className="container border-b border-solid border-gray-400 flex flex-row-reverse items-center justify-between h-14">
            {profile === null ? (
                <button className="btnPrimary hover:hoverBtn">پروفایل</button>
            ) : (
                <button
                    className="btnPrimary hover:hoverBtn"
                    onClick={toggleCategory}
                >
                    {profile.username}
                </button>
            )}
            <Link
                to="/panel-admin-home"
                className="text-primaryColor font-bold text-xl"
            >
                <p>صفحه ی مدیریت</p>
            </Link>
            <Link to="/panel-admin-home">
                <img src={logo} alt="LOGO.PNG" className="w-12 h-12" />
            </Link>
            <div
                className={`${
                    isProfile ? " flex" : "hidden"
                } w-[75%] absolute top-14 left-1/2 -translate-x-1/2 h-96 bg-white rounded-md z-20 primary-transition flex items-center justify-center`}
            >
                <IoMdClose
                    className="absolute top-3 right-3 text-xl text-primaryColor w-6 h-6 primary-transition hover:hoverBtn cursor-pointer"
                    onClick={toggleCategory}
                />
                <span className="w-[50%] h-[50%] px-20 py-10 border-2 border-solid border-primaryColor rounded boxShadow flex flex-col items-center justify-between cursor-default">
                    <h2 className="text-4xl font-bold text-primaryColor ">
                        *** {profile && profile.username} ***
                    </h2>
                    <span className="flex flex-row items-center justify-between  w-full text-3xl">
                        <p className="w-42 text-base font-bold">
                            {getRole(profile && profile.role)}
                        </p>
                        <p className="w-42 text-base font-bold">
                            {profile && profile.city}
                        </p>
                        <p className="w-42 text-base font-bold">
                            {convertToPersianNumbers(profile && profile.phone)}
                        </p>
                    </span>
                </span>
            </div>
            {isProfile && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={toggleCategory}
                ></div>
            )}
        </header>
    );
};

export default HeaderAdmin;
