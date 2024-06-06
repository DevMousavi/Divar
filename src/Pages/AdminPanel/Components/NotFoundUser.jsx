import React from "react";

const NotFoundUser = ({ text }) => {
    return (
        <div className="bg-primaryColor w-[50%] h-9 text-white  rounded-md px-6 py-2 z-20 primary-transition flex items-center justify-center">
            <p>{text}</p>
        </div>
    );
};

export default NotFoundUser;
