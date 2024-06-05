import React from "react";

import Header from "../LayOut/Header.jsx";
import SideBar from "../Components/SideBar.jsx";
import TextHomePage from "../Components/TextHomePage.jsx";
import ListItems from "../Components/ListItems.jsx";

const HomePage = () => {
    return (
        <>
            <Header />
            <TextHomePage />
            <main className="container mt-1 flex flex-row gap-20">
                <SideBar />
                <ListItems />
            </main>
        </>
    );
};

export default HomePage;
