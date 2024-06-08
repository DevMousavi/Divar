import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/Config";
import Pagination from "./Pagination.jsx";
import LoaderPages from "../Loader/LoaderPages.jsx";

const ListItems = ({ category, setIsLoading }) => {
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setPageNumber(1);
    }, [category]);

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["advertisement", category, pageNumber],
        queryFn: async () => {
            if (category === "All") {
                setPageNumber(1);
                const request = await api.get(
                    `/advertisements/${pageNumber}/39`
                );
                return request;
            } else {
                const request = await api.get(
                    `/advertisements/${category}/${pageNumber}/39`
                );
                return request;
            }
        },
    });

    if (isError && error.response.status === 404) {
        setPageNumber("-1");
    } else if (isLoading) {
        setIsLoading(true);
    } else if (!isLoading) {
        setIsLoading(false);
    }

    return (
        <>
            <div className="w-full flex flex-col items-center ">
                <div className="w-full flex flex-row justify-between flex-wrap gap-y-3">
                    {isLoading ? (
                        <LoaderPages />
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
