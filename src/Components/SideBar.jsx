import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/Config.js";

const SideBar = ({ setCategory }) => {
    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const request = await api.get("/categories");
            return request;
        },
    });

    return (
        <div className=" w-72">
            <aside className="flex flex-col gap-1 font-bold text-sm text-primaryGray w-full pb-5">
                <ul className="w-full">
                    <li
                        onClick={() => setCategory("All")}
                        className="w-full py-2 rounded-sm flex flex-row gap-2 items-center justify-start primary-transition hover:hoverText"
                    >
                        همه دسته بندی ها
                    </li>
                    {data &&
                        data.data.map((item) => (
                            <li
                                onClick={() => {
                                    setCategory(item._id);
                                }}
                                key={item._id}
                                className="w-full py-2 rounded-sm flex flex-row gap-2 items-center justify-start primary-transition hover:hoverText"
                            >
                                {item.title}
                            </li>
                        ))}
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;
