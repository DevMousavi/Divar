import React from "react";

const Pagination = ({ setPageNumber, pageNumber, isLoading }) => {
    if (pageNumber === "-1") {
        return (
            <>
                <h1>اگهی وجود ندارد</h1>
                <button
                    onClick={() => {
                        setPageNumber(1);
                    }}
                >
                    برگشت به صفحه اول
                </button>
            </>
        );
    }

    if (!isLoading) {
        return (
            <div className="cursor-default flex flex-row items-center justify-center gap-5 w-96 h-20 ">
                <button
                    className="btnPrimary hover:hoverBtn cursor-pointer"
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    صفحه بعد
                </button>
                ...
                <p className="border-2 border-solid border-primaryColor rounded-lg w-10 flex items-center justify-center text-primaryGray">
                    {pageNumber}
                </p>
                ...
                <button
                    className="btnPrimary hover:hoverBtn cursor-pointer"
                    onClick={() => setPageNumber(pageNumber - 1)}
                    disabled={pageNumber <= 1}
                >
                    صفحه قبل
                </button>
            </div>
        );
    }
};

export default Pagination;
