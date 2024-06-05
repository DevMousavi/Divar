import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/Config";

const ListItems = ({ category }) => {
    // const { data, isLoading, isError, error, isFetching } = useQuery({
    //     queryKey: ["advertisement", category],
    //     queryFn: async () => {
    //         if (category === "All") {
    //             const request = await api.get("/advertisements");
    //             console.log("Category is All: ", request);
    //             return request;
    //         } else {
    //             const request = await api.get(
    //                 `/advertisements/${category}/1/40`
    //             );
    //             console.log("With Category:", request);
    //             return request;
    //         }
    //     },
    // });

    // data && console.log(data);

    return (
        <>
            <div className="w-full flex flex-row justify-between flex-wrap">
                {/* {isLoading ? (
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
                )} */}
            </div>
        </>
    );
};

export default ListItems;
