import React from "react";
import Item from "./singleItem.js";

class Sports extends React.Component {
    render() {
        const sportsItems = [];
        const { items } = this.props.sportsData;
        items.forEach(item => {
            sportsItems.push(
                <Item
                    key={item.id}
                    itemName={item.name}
                    itemPrice={item.price}
                    addToCart={this.props.addToCart}
                />
            );
        });
        return <div>{sportsItems}</div>;
    }
}

export default Sports;
