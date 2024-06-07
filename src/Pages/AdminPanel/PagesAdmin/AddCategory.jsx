import React from "react";
import HeaderAdmin from "../LayOut/HeaderAdmin";
import SideBar from "../Components/SideBar";

const AddCategory = () => {
    const submitAddCategoryHandler = (event) => {
        event.preventDefault();
        console.error(" submitAddCategoryHandler is Rended Now ...");
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
                            className="outline-none border border-solid border-primaryColor rounded w-full px-2 py-1"
                        />
                        <label htmlFor="icon" className="text-xs text-gray-700">
                            آیکون دسته بدی جدید را وارد کنید
                        </label>
                        <input
                            type="text"
                            name="icon"
                            id="icon"
                            className="outline-none border border-solid border-primaryColor rounded w-full px-2 py-1"
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
