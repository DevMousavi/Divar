import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/Config";

const ListItems = () => {
    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const request = api.get("/advertisements");
            return request;
        },
    });

    console.log({ data, isLoading });

    return (
        <>
            <div className="w-full flex flex-row justify-between flex-wrap">
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
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default ListItems;
