import React, { useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import SideBar from "../SideBar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../services/Config";
import UserBox from "../Components/UserBox";

const UsersList = () => {
    const [deletePhoneNumber, setDeletePhoneNumber] = useState(null);
    console.log(deletePhoneNumber);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const request = await api.get("/users");
            return request;
        },
    });
    console.log({ data, isLoading, isError, error });

    const { mutate } = useMutation({
        mutationFn: async (phoneNumber) => {
            await api.delete(`/users/${phoneNumber}`);
        },
        onSuccess: () => {
            console.log("User deleted successfully");
            queryClient.invalidateQueries(["users"]);
        },
    });

    const handleDelete = (phoneNumber) => {
        setDeletePhoneNumber(phoneNumber);
        mutate(phoneNumber);
    };

    return (
        <>
            <HeaderAdmin />
            <div className="container flex flex-row gap-10 mt-14">
                <SideBar />
                <div className="bg-white w-full">
                    {isLoading ? (
                        <h1>Loading</h1>
                    ) : (
                        <ul className="flex flex-col gap-2">
                            {data.data.map((item) => (
                                <UserBox
                                    key={item._id}
                                    userName={item.username}
                                    phoneNumber={item.phone}
                                    location={item.city}
                                    role={item.role}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default UsersList;
