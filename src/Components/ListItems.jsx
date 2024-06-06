import React, { useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/Config";
import Pagination from "./Pagination.jsx";

const ListItems = ({ category }) => {
    const [pageNumber, setPageNumber] = useState("1");

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["advertisement", category],
        queryFn: async () => {
            if (category === "All") {
                const request = await api.get("/advertisements");
                console.log("Category is All: ", request);
                return request;
            } else {
                const request = await api.get(
                    `/advertisements/${category}/${pageNumber}/39`
                );
                console.log("With Category:", request);
                return request;
            }
        },
    });

    return (
        <>
            <div className="w-full flex flex-col items-center ">
                <div className="w-full flex flex-row justify-between flex-wrap gap-y-3">
                    {isLoading ? (
                        <h2>Loading</h2>
                    ) : (
                        data &&
                        data.data.map((item) => (
                            <Card
                                key={item._id}
                                title={item.name}
                                location={item.location}
                                price={item.price}
                                id={item._id}
                            />
                        ))
                    )}
                </div>
                <Pagination
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    isLoading={isLoading}
                />
            </div>
        </>
    );
};

export default ListItems;
