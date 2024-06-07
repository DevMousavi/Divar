import React from "react";
import { convertDate } from "../../../Helpers/convertDate";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../services/Config";

const BoxCategories = ({ updatedAt, title, id }) => {
    const { mutate } = useMutation({
        mutationFn: async (idCategory) => {
            await api.delete(`/categories/${idCategory}`);
        },
        onSuccess: () => {
            console.log("Category deleted successfully");
            queryClient.invalidateQueries(["category"]);
        },
    });

    const deleteCategoryHandler = (id) => {
        mutate(id);
    };

    return (
        <div className="relative border-2 border-solid border-primaryColor rounded flex flex-col items-center justify-center gap-3 py-9 text-base boxShadow w-40 h-40 font-bold ">
            <h2>{title}</h2>
            <span className="flex flex-col text-xs text-gray-400 gap-1 absolute bottom-1 right-1">
                <p>ساخته شده</p>
                <p className="text-xs text-gray-400">
                    {convertDate(updatedAt)}
                </p>
            </span>

            <button
                className="absolute bottom-1 left-1 btnPrimary hover:hoverBtn h-9 "
                onClick={() => deleteCategoryHandler(id)}
            >
                <FaRegTrashAlt />
            </button>
        </div>
    );
};

export default BoxCategories;
