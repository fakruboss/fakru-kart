import React from "react";
import fkart from "./app-data.js";
import Item from "./singleItem.js"

class Electronics extends React.Component {
    render() {
        const electronicItems = [];
        const { items } = fkart.categories.electronics;
        items.forEach(item => {
            electronicItems.push(
                <Item
                    key={item.id}
                    itemName={item.name}
                    itemPrice={item.price}
                />
            );
        });
        return <div>{electronicItems}</div>;
    }
}

export default Electronics;
