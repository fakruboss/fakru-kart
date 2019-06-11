import React from "react";
import fkart from "./app-data.js";
import Item from "./item.js";

class Sports extends React.Component {
    render() {
        const sportsItems = [];
        const { items } = fkart.categories.sports;
        items.forEach(item => {
            sportsItems.push(<Item key={item.id} itemName={item.name} />);
        });
        return <div>{sportsItems}</div>;
    }
}

export default Sports;
