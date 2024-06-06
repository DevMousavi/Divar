import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import SideBar from "./SideBar";

const AdminHomePage = () => {
    return (
        <>
            <HeaderAdmin />
            <div className="container flex flex-row gap-10 mt-14">
                <SideBar />
                <div className="bg-white w-full"></div>
            </div>
        </>
    );
};

export default AdminHomePage;
