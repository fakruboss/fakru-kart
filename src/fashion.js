import React from "react";
import fkart from "./app-data.js";
import Item from "./item.js";

class Fashion extends React.Component {
    render() {
        const fashionItems = [];
        const { items } = fkart.categories.fashion;
        items.forEach(item => {
            fashionItems.push(<Item key={item.id} itemName={item.name} />);
        });
        return <div>{fashionItems}</div>;
    }
}

export default Fashion;
