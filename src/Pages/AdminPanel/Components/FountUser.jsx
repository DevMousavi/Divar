import React from "react";
import { convertToPersianNumbers } from "../../../Helpers/convertToPersianNumbers.js";
import { getRole } from "../../../Helpers/role";

const FountUser = ({ handleDelete, data }) => {
    if (!data) {
        return;
    }
    return (
        <div className="flex flex-row items-center justify-between w-[50%] h-9 px-2 rounded-md text-xs bg-slate-100 border border-solid border-primaryColor ">
            <p>{data.data.username}</p>
            <p className="font-bold">
                {convertToPersianNumbers(data.data.phone)}
            </p>
            <p>{data.data.city}</p>
            <p>{getRole(data.data.role)}</p>
            <button
                className="btnPrimary hover:hoverBtn"
                onClick={() =>
                    data.data.role !== "ADMIN" && handleDelete(data.data.phone)
                }
            >
                حدف
            </button>
        </div>
    );
};

export default FountUser;
