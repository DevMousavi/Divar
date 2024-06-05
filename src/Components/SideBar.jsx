import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/Config.js";

const SideBar = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const request = await api.get("/categories");
            return request;
        },
    });

    console.log({ data, isLoading, isError, error });
    return (
        <div className=" w-72">
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <aside className="flex flex-col gap-1 font-bold text-sm text-primaryGray w-full pb-5">
                    {data &&
                        data.data.map((item) => (
                            <ul key={item.id} className="w-full">
                                <li className="w-full py-2 rounded-sm flex flex-row gap-2 items-center justify-start primary-transition hover:hoverText">
                                    {item.title}
                                </li>
                            </ul>
                        ))}
                </aside>
            )}
        </div>
    );
};

export default SideBar;
