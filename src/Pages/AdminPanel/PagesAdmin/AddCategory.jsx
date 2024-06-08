import React, { useRef, useState } from "react";
import HeaderAdmin from "../LayOut/HeaderAdmin";
import SideBar from "../Components/SideBar";
import { api } from "../../../services/Config";
import { useMutation } from "@tanstack/react-query";

const AddCategory = () => {
    const [titleCategory, setTitleCategory] = useState("");
    const [iconCategory, setIconCategory] = useState(null);

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const req = await api.post("/categories", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return req;
        },
    });

    // Form ..................................................................
    const submitAddCategoryHandler = (event) => {
        event.preventDefault();
        console.log(
            "%c submitAddCategoryHandler is Rended Now ...",
            "color: green; background-color: white;"
        );

        const formData = new FormData();
        formData.append("title", titleCategory);
        formData.append("icon", iconCategory);

        console.log("Category FormData: ", formData);

        // ======================================================================

        mutate(formData, {
            onSuccess: (data) => {
                if (data.status === 201 || data.status === 200) {
                    console.log(data);
                }
            },
            onError: (error) => {
                console.log(error);
            },
        });

        // ======================================================================
    };

    return (
        <>
            <HeaderAdmin />
            <div className="container flex flex-row gap-10 mt-14">
                <SideBar />
                <div className="flex flex-col w-full items-center">
                    <h5 className="text-2xl font-bold text-primaryColor">
                        * * * ایجاد دسته بندی جدید * * *
                    </h5>
                    <form
                        onSubmit={submitAddCategoryHandler}
                        className="bg-white border rounded-lg px-4 max-w-[350px] border-solid flex flex-col gap-2 py-3 mt-6 items-center"
                    >
                        <label
                            htmlFor="title"
                            className="text-xs text-gray-700"
                        >
                            اسم دسته بدی جدید را وارد کنید
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="text-sm outline-none border border-solid border-primaryColor rounded w-full px-2 py-1"
                            onChange={(e) => setTitleCategory(e.target.value)}
                        />
                        <label htmlFor="icon" className="text-xs text-gray-700">
                            آیکون دسته بدی جدید را وارد کنید
                        </label>
                        <input
                            type="file"
                            name="icon"
                            id="icon"
                            className="outline-none border border-solid border-primaryColor rounded w-full px-2 py-1"
                            onChange={(e) => setIconCategory(e.target.files[0])}
                        />
                        <button
                            type="submit"
                            className="btnPrimary w-full mt-5 text-sm hover:hoverBtn"
                        >
                            ایجاد دسته بندی جدید
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCategory;
