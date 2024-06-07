import React, { useState } from "react";
import HeaderAdmin from "../LayOut/HeaderAdmin";
import SideBar from "../Components/SideBar.jsx";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../services/Config";
import UserBox from "../Components/UserBox";
import SearchBoxUser from "../Components/SearchBoxUser.jsx";

const UsersList = () => {
    const [deletePhoneNumber, setDeletePhoneNumber] = useState(null);
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
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
                            <SearchBoxUser handleDelete={handleDelete} />
                            <p className="container text-xs mx-2 text text-gray-400">
                                تعداد کل : {data.data.length}
                            </p>
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
