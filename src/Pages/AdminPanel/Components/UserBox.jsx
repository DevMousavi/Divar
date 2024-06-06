import React from "react";
import { getRole } from "../../../Helpers/role";

const UserBox = ({ userName, phoneNumber, location, role, handleDelete }) => {
    return (
        <div className="w-full h-12 flex items-center justify-between px-3 border border-solid border-gray-300 rounded-md text-sm primary-transition hover:border-primaryColor ">
            <span className="flex flex-row items-center cursor-default gap-1 w-96">
                <p>اسم کاربر :</p>
                <p className="text-primaryGray">{userName}</p>
            </span>
            <span className="flex flex-row items-center cursor-default gap-1">
                <p>شماره تماس :</p>
                <p className="text-primaryGray">{phoneNumber}</p>
            </span>
            <span className="flex flex-row items-center cursor-default gap-1">
                <p>شهر:</p>
                <p className="text-primaryGray">{location}</p>
            </span>
            <span className="flex flex-row items-center cursor-default gap-1">
                <p>مسولیت:</p>
                <p className="text-primaryGray">{getRole(role)}</p>
            </span>
            <button
                className="btnPrimary hover:hoverBtn"
                onClick={() => role !== "ADMIN" && handleDelete(phoneNumber)}
            >
                حذف
            </button>
        </div>
    );
};

export default UserBox;
