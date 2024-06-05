import React from "react";
import Card from "./Card";

const ListItems = () => {
    return (
        <>
            <div className="w-full flex flex-row justify-between flex-wrap">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default ListItems;
