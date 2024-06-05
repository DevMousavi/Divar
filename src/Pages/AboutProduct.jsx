import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "../LayOut/Header.jsx";
import { api } from "../services/Config.js";

const AboutProduct = () => {
    const params = useParams();
    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const request = api.get(`/advertisements/${params.id}`);
            return request;
        },
    });

    // console.log(data); اطلاعات محصول با ایدی درون url
    return (
        <>
            <Header />
            <div>AboutProduct</div>
        </>
    );
};

export default AboutProduct;
