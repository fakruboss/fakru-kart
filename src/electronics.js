import React from "react";
import fkart from "./app-data.js";
import Item from "./item.js";

class Electronics extends React.Component {
    render() {
        const electronicItems = [];
        const { items } = fkart.categories.electronics;
        items.forEach(item => {
            electronicItems.push(<Item key={item.id} itemName={item.name} />);
        });
        return <div>{electronicItems}</div>;
    }
}

export default Electronics;
