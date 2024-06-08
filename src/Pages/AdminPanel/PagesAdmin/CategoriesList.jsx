import React from "react";
import HeaderAdmin from "../LayOut/HeaderAdmin.jsx";
import SideBar from "../Components/SideBar";
import { api } from "../../../services/Config";
import { useQuery } from "@tanstack/react-query";
import BoxCategories from "../Components/BoxCategories";
import LoaderPages from "../../../Loader/LoaderPages.jsx";

const CategoriesList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const request = await api.get("/categories");
            return request;
        },
    });

    if (isLoading) {
        return <LoaderPages />;
    }
    return (
        <>
            <HeaderAdmin />

            <div className="container flex flex-row gap-10 mt-14">
                <SideBar />
                <div className="bg-white w-full flex flex-row flex-wrap items-center justify-around">
                    {data &&
                        data.data.map((item) => (
                            <BoxCategories
                                key={item._id}
                                title={item.title}
                                updatedAt={item.updatedAt}
                                id={item._id}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default CategoriesList;
