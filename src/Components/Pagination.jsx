import React from "react";

const Pagination = ({ setPageNumber, pageNumber, isLoading }) => {
    return (
        <div className=" flex flex-row items-center justify-center gap-5 w-96 h-20 ">
            <button className="btnPrimary hover:hoverBtn">صفحه بعد</button>
            ...
            <p className="border-2 border-solid border-primaryColor rounded-lg w-10 flex items-center justify-center text-primaryGray">
                {pageNumber}
            </p>
            ...
            <button className="btnPrimary hover:hoverBtn">صفحه قبل</button>
        </div>
    );
};

export default Pagination;
