import React from "react";
import fkart from "./app-data.js";
import "./index.css";
import Category from "./category.js";

function Navbar() {
    return (
        <div className="navbar">
            <input placeholder="search..." className="searchbar" type="text"/>
        </div>
    );
}
class Homepage extends React.Component {
    render() {
        const categories = [];
        for (let category in fkart.categories) {
            categories.push(
                <Category key={category} itemName={category} />
            );
        }
        return (
            <>
                <Navbar />
                <div>{categories}</div>
            </>
        );
    }
}

export default Homepage;
