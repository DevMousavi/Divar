import React from "react";

import HeaderAdmin from "../LayOut/HeaderAdmin.jsx";
import SideBar from "../Components/SideBar.jsx";

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
