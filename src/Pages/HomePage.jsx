import React from "react";

import Header from "../LayOut/Header.jsx";
import SideBar from "../Components/SideBar.jsx";
import TextHomePage from "../Components/TextHomePage.jsx";

const HomePage = () => {
    return (
        <>
            <Header />
            <TextHomePage />
            <main className="container mt-1 flex flex-row gap-20">
                <SideBar />
                <div className="bg-yellow-200 w-full">
                    HeaderPage List Items
                </div>
            </main>
        </>
    );
};

export default HomePage;
