import React, { useState } from "react";

import { BiSupport } from "react-icons/bi";
import { IoChatbubblesOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [isCategory, setIsCategory] = useState(false);

    const toggleCategory = () => {
        setIsCategory((prevState) => !prevState);
    };

    return (
        <>
            <header className="border-b border-solid border-gray-300">
                <div className="container flex flex-row-reverse items-center justify-between h-14">
                    <div className="flex flex-row-reverse w-[30%] items-center justify-start gap-6">
                        <button className="btnPrimary hover:hoverBtn">
                            ثبت آگهی
                        </button>
                        <div className="w-[60%]">
                            <ul className="w-full flex flex-row items-center justify-between">
                                <li className="flex flex-row-reverse items-center gap-2 text-xs px-1 py-2 rounded text-primaryGray cursor-pointer primary-transition hover:text-black hover:bg-gray-100">
                                    <p>پشتیبانی</p>
                                    <BiSupport />
                                </li>
                                <li className="flex flex-row-reverse items-center gap-2 text-xs px-1 py-2 rounded text-primaryGray cursor-pointer primary-transition hover:text-black hover:bg-gray-100">
                                    <p>چت</p>
                                    <IoChatbubblesOutline />
                                </li>
                                <li className="flex flex-row-reverse items-center gap-2 text-xs px-1 py-2 rounded text-primaryGray cursor-pointer primary-transition hover:text-black hover:bg-gray-100">
                                    <p>دیوار من</p>
                                    <FaRegUser />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse w-[50%] h-full items-center justify-between">
                        <div className="flex flex-row w-[60%] h-[60%]">
                            <input
                                type="text"
                                name="searchBoxUser"
                                placeholder="جستجو در همه آگهی ها"
                                className="w-full rounded-md px-2 rounded-tl-none rounded-bl-none bg-gray-200 text-sm outline-none"
                            />
                            <LuSearch className="bg-gray-200 w-20 h-full py-1 text-gray-400 rounded-tl-md rounded-bl-md px-7 cursor-pointer" />
                        </div>

                        <div className="flex flex-row-reverse items-center justify-center gap-4">
                            <span
                                className="flex flex-row-reverse items-center justify-center gap-1 px-2 h-8 rounded-md text-sm text-primaryGray cursor-pointer primary-transition hover:text-black hover:bg-gray-100"
                                onClick={toggleCategory}
                            >
                                <p>دسته ها</p>
                                {!isCategory ? (
                                    <IoIosArrowDown />
                                ) : (
                                    <IoIosArrowUp />
                                )}
                            </span>
                            <span className="flex flex-row-reverse items-center justify-center gap-1 px-2 h-8 rounded-md text-sm text-primaryGray cursor-pointer primary-transition hover:text-black hover:bg-gray-100">
                                <p>شیراز</p>
                                <IoLocationOutline />
                            </span>
                        </div>
                        <Link to="/">
                            <img
                                src="./Icons/Logo/Logo.svg"
                                alt="Logo.svg"
                                className="w-14 h-14 primary-transition hover:scale-105"
                            />
                        </Link>
                    </div>
                </div>
                <div
                    className={`${
                        isCategory ? " flex" : "hidden"
                    } w-[75%] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 bg-white rounded-md z-20`}
                >
                    <IoMdClose
                        className="absolute top-3 right-3 text-xl text-primaryColor w-6 h-6 primary-transition hover:hoverBtn cursor-pointer"
                        onClick={toggleCategory}
                    />
                </div>
                {isCategory && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10"
                        onClick={toggleCategory}
                    ></div>
                )}
            </header>
        </>
    );
};

export default Header;
