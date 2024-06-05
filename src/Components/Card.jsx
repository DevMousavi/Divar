import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <Link
            to="/about-product"
            className="flex flex-row-reverse justify-between p-4 h-40 w-[33%] rounded-md border border-solid border-gray-300 primary-transition hover:border-primaryColor"
        >
            <img src="" alt="" className="w-32 h-32 rounded" />
            <div className="flex flex-col justify-between">
                <h2 className="font-bold text-sm text-black w-full">
                    اسم محصول اسم محصول اسم محصول اسم محصول اسم محصول
                </h2>
                <span className=" text-primaryGray text-sm flex flex-col gap-3 justify-between">
                    <p className="text-primaryColor">شیراز</p>
                    <span>
                        <p>
                            <strong>قیمت:</strong> 260000 تومان
                        </p>
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default Card;
