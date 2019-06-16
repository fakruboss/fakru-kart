import React from "react";
import Item from "./singleItem.js";

class Electronics extends React.Component {
    render() {
        const electronicItems = [];
        const { items } = this.props.electronicsData;
        items.forEach(item => {
            electronicItems.push(
                <Item
                    key={item.id}
                    itemName={item.name}
                    itemPrice={item.price}
                    addToCart={this.props.addToCart}
                />
            );
        });
        return <div>{electronicItems}</div>;
    }
}

export default Electronics;
