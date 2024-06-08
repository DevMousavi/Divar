import React, { useState } from "react";

import Header from "../LayOut/Header.jsx";
import SideBar from "../Components/SideBar.jsx";
import TextHomePage from "../Components/TextHomePage.jsx";
import ListItems from "../Components/ListItems.jsx";

const HomePage = () => {
    const [category, setCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(null);
    return (
        <>
            <Header />
            <TextHomePage />
            <main className="container mt-1 flex flex-row gap-20">
                {isLoading === true ? null : (
                    <SideBar setCategory={setCategory} />
                )}
                <ListItems category={category} setIsLoading={setIsLoading} />
            </main>
        </>
    );
};

export default HomePage;
