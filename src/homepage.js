import React from "react";
import fkart from "./app-data.js";
import "./index.css";
import Item from "./item.js";

class Homepage extends React.Component {
    render() {
        const categories = [];
        for (let category in fkart.categories) {
            categories.push(
                <Item key={category} itemName={category} />
            );
        }
        return <div>{categories}</div>;
    }
}

export default Homepage;
