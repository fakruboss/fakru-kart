import React from "react";

class Buynow extends React.Component {
    showCartItems = () => {
        const allcartItems = [];
        const {cartItems} = this.props;
        if (!cartItems.length) {
            return (
                <div className="vh-center">
                    <h1>Currently, there are no items in the cart</h1>
                </div>
            );
        } else {
            for (let index = 0; index < cartItems.length; index++) {
                const cartItem = cartItems[index];
                for (let itemName in cartItem) {
                    allcartItems.push(<p key={index}>{itemName} {cartItem[itemName]}</p>)
                }
            }
            return allcartItems;
        }
    }
    render() {
        return (
            <div>
                {this.showCartItems()}
            </div>
        )
    }
}

export default Buynow;