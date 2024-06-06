import React, { useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import SideBar from "../SideBar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../services/Config";
import UserBox from "../Components/UserBox";
import { LuSearch } from "react-icons/lu";

const UsersList = () => {
    const [deletePhoneNumber, setDeletePhoneNumber] = useState(null);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const request = await api.get("/users");
            return request;
        },
    });

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
                        <>
                            <div className="flex flex-row justify-center gap-4">
                                <input
                                    type="number"
                                    placeholder="جستجو کاربر با شماره ...... "
                                    className="outline-none bg-gray-100 w-[50%] mb-6 border-2 border-solid text-xs border-primaryColor rounded px-3 py-2"
                                />
                                <LuSearch className="text-white bg-primaryColor p-1 rounded-md w-9 h-full" />
                            </div>
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
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default UsersList;
