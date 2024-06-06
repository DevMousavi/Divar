import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { api } from "../services/Config.js";

import Header from "../LayOut/Header.jsx";
import { BsExclamationDiamond } from "react-icons/bs";
import { convertToPersianNumbers } from "../Helpers/convertToPersianNumbers.js";

const AboutProduct = () => {
    // const params = useParams();
    // const { data, isLoading, isError, error, isFetching } = useQuery({
    //     queryKey: ["advertisement"],
    //     queryFn: async () => {
    //         const request = api.get(`/advertisements/${params.id}`);
    //         return request;
    //     },
    // });

    // console.log(data);
    return (
        <>
            <Header />
            <div className=" my-14 w-[1000px] mx-auto flex flex-row gap-7">
                <div className=" w-full py-6">
                    <h1 className="text-2xl font-bold text-primaryColor  pb-2">
                        متن اسم آگهی تستی متن اسم آگهی تستی متن اسم آگهی تستی
                    </h1>
                    <h3 className="text-sm py-2 border-b border-solid border-gray-200">
                        1 ساعت پیش در شیراز
                    </h3>
                    <span className=" flex flex-row items-start justify-between w-[50%] mx-auto py-4 border-b border-solid border-gray-200">
                        <BsExclamationDiamond className="text-primaryColor" />
                        <h6>بهتر است معامله حضوری انجام شود</h6>
                        <BsExclamationDiamond className="text-primaryColor" />
                    </span>
                    <span className="w-full bg-blue-700">
                        <p className="btnPrimary w-40 flex items-center justify-center mx-auto my-4 hover:hoverBtn">
                            اطلاعات تماس
                        </p>
                    </span>
                    <span className="flex w-full items-start justify-between border-b border-solid border-gray-200 py-2 text-black">
                        <p className="font-bold text-primaryGray">وضعیت:</p>
                        <p>سالم</p>
                    </span>
                    <span className="flex w-full items-start justify-between border-b border-solid border-gray-200 py-2 text-black">
                        <p className="font-bold text-primaryGray">قیمت:</p>
                        <p>
                            {convertToPersianNumbers((20000).toLocaleString())}
                        </p>
                    </span>
                    <span>
                        <h6 className="font-bold text-primaryGray my-3">
                            توضحیات
                        </h6>
                        <p className="text-black w-full text-wrap px-2 text-sm">
                            متن توضحیات کاربر متن توضحیات کاربر متن توضحیات
                            کاربر متن توضحیات کاربر متن توضحیات کاربر متن
                            توضحیات کاربر متن توضحیات کاربر متن توضحیات کاربر
                            متن توضحیات کاربر متن توضحیات کاربر متن توضحیات
                            کاربر متن توضحیات کاربر متن توضحیات کاربر متن
                            توضحیات کاربر متن توضحیات کاربر متن توضحیات کاربر
                            متن توضحیات کاربر متن توضحیات کاربر متن توضحیات
                            کاربر
                        </p>
                    </span>
                </div>
                <div className="bg-yellow-100 flex flex-col gap-5">
                    <img
                        src=""
                        alt="imageProducts.png"
                        className="w-96 h-96 rounded border-2 border-solid border-gray-800"
                    />
                    <form className="w-full flex flex-col gap-2 items-end">
                        <textarea
                            id="comment"
                            name="comment"
                            placeholder="نظر خود را وارد کنید..."
                            rows="4"
                            cols="50"
                            className="w-full outline-none border border-solid border-gray-200 mx-auto p-2 text-xs"
                        ></textarea>
                        <button className="btnPrimary w-32 hover:hoverBtn">
                            ارسال نطر
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AboutProduct;
