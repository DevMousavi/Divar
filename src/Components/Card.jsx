import React from "react";
import { Link } from "react-router-dom";
import { convertToPersianNumbers } from "../Helpers/convertToPersianNumbers.js";

const Card = ({ title, id, location, price }) => {
    return (
        <Link
            to={`/about-product/${id}`}
            className="flex flex-row-reverse justify-between p-4 h-40 w-[33%] rounded-md border border-solid border-gray-300 primary-transition hover:border-primaryColor"
        >
            <img src="" alt="" className="w-32 h-32 rounded" />
            <div className="flex flex-col justify-between">
                <h2 className="font-bold text-sm text-black w-full">{title}</h2>
                <span className=" text-primaryGray text-sm flex flex-col gap-3 justify-between">
                    <p className="text-primaryColor">{location}</p>
                    <span>
                        <p>
                            <strong>قیمت:</strong>{" "}
                            {convertToPersianNumbers(price.toLocaleString())}{" "}
                            تومان
                        </p>
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default Card;
