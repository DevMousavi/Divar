import React from "react";
import { FaRegUser } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const capabilities = [
        {
            id: "users-list",
            title: "لیست تمام کاربران",
            icon: <FaRegUser />,
        },
        {
            id: "categories-list",
            title: "لیست تمام دسته بندی ها",
            icon: <MdOutlineCategory />,
        },
        {
            id: "add-ads",
            title: "اضافه کردن دسته بندی جدید",
            icon: <TbCategoryPlus />,
        },
    ];

    const navigate = useNavigate();

    const routeHandler = (item) => {
        item.id === "users-list" && navigate(`/${item.id}`);
        item.id === "categories-list" && navigate(`/${item.id}`);
        item.id === "add-ads" && navigate(`/${item.id}`);
    };

    return (
        <div className="w-80 border-l border-solid border-gray-200  text-sm">
            <ul className="flex flex-col gap-2">
                {capabilities.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => routeHandler(item)}
                        className="text-primaryGray hover:hoverText primary-transition p-2 rounded-md flex flex-row gap-3 items-center"
                    >
                        {item.icon}
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
