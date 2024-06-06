import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { api } from "../../../services/Config";
import NotFoundUser from "./NotFoundUser";
import FountUser from "./FountUser";

const SearchBoxUser = ({ handleDelete }) => {
    const [searchUser, setSearchUser] = useState(null);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["usersPhoneNumber", searchUser],
        queryFn: async () => {
            if (searchUser !== null) {
                const request = await api.get(`/users/${searchUser}`);
                return request;
            } else {
                return [];
            }
        },
    });

    return (
        <>
            <div className="flex flex-row justify-start gap-4 ">
                <input
                    type="number"
                    placeholder="جستجو کاربر با شماره ...... "
                    className="outline-none bg-gray-100 w-[50%] mb-6 border-2 border-solid text-xs border-primaryColor rounded px-3 py-2"
                    onChange={(e) => {
                        setSearchUser(e.target.value);
                    }}
                />
                <LuSearch className="text-white bg-primaryColor p-1 rounded-md w-9 h-full cursor-pointer" />
                {error &&
                    error.response.data.phone ===
                        "شماره تماس معتبر نمی باشد !" && (
                        <NotFoundUser
                            text={
                                "کاربری با این شماره یافت نشد (شاید شماره اشتباه وارد شده باشد)"
                            }
                        />
                    )}
                {isLoading && <NotFoundUser text={"در حال جست و جو ..."} />}
                {data && data.length !== 0 && (
                    <FountUser handleDelete={handleDelete} data={data} />
                )}
            </div>
        </>
    );
};

export default SearchBoxUser;
