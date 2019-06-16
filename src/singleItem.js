import React from "react";
import "./index.css";
import ironbox from "./assets/electronics/ironbox.jpg";
import trimmer from "./assets/electronics/trimmer.jpg";
import television from "./assets/electronics/television.jpg";
import volleyball from "./assets/sports/volleyball.jpg";
import football from "./assets/sports/football.jpg";
import basketball from "./assets/sports/basketball.jpg";
import shirt from "./assets/fashion/shirt.jpg";
import tshirt from "./assets/fashion/t-shirt.jpeg";
import trouser from "./assets/fashion/trousers.jpg";

class Item extends React.Component {
    state = {
        quantity: 1
    };

    imgSrc = itemName => {
        const imgName = itemName
            .toLowerCase()
            .split(" ")
            .join("");
        if (imgName === "ironbox") return ironbox;
        else if (imgName === "trimmer") return trimmer;
        else if (imgName === "television") return television;
        else if (imgName === "volleyball") return volleyball;
        else if (imgName === "football") return football;
        else if (imgName === "basketball") return basketball;
        else if (imgName === "shirt") return shirt;
        else if (imgName === "t-shirt") return tshirt;
        else if (imgName === "trouser") return trouser;
        return undefined;
    };
    addToCart = itemName => {
        let { quantity } = this.state;
        // quantity = typeof(quantity) === "number" ? quantity : parseInt(quantity);
        this.props.addToCart(itemName, quantity);
    };
    handleOnchange = event => {
        const { value } = event.target;
        this.setState({ quantity: value });
    };

    render() {
        const { itemName, itemPrice } = this.props;
        const { quantity } = this.state;
        return (
            <div className="item-div">
                <img
                    className="item-img"
                    src={this.imgSrc(itemName)}
                    alt=""
                    height="400"
                    width="400"
                />
                <section className="item-info">
                    <h1 className="item-name">{itemName}</h1>
                    <h4 className="item-price">&#x20b9; {itemPrice}</h4>
                    <div className="item-quantity-con">
                        No. of quantity
                        <input
                            className="item-quantity"
                            type="number"
                            min="1"
                            onChange={this.handleOnchange}
                            value={quantity}
                        />
                    </div>
                    <button>Buy Now</button>
                    <button
                        onClick={() => {
                            this.addToCart(itemName);
                        }}
                    >
                        Add to cart
                    </button>
                </section>
            </div>
        );
    }
}

export default Item;
