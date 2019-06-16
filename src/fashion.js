import React from "react";
import Item from "./singleItem.js";

class Fashion extends React.Component {
    render() {
        const fashionItems = [];
        const { items } = this.props.fashionData;
        items.forEach(item => {
            fashionItems.push(
                <Item
                    key={item.id}
                    itemName={item.name}
                    itemPrice={item.price}
                    addToCart={this.props.addToCart}
                />
            );
        });
        return <div>{fashionItems}</div>;
    }
}

export default Fashion;
