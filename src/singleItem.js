import React from 'react';
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
    render() {
        const { itemName, itemPrice } = this.props;
        return (
            <div>
                <div className="item-img">
                    <img
                        src={this.imgSrc(itemName)}
                        alt=""
                        height="400"
                        width="400"
                    />
                </div>
                <div className="item-info">
                    <h1>{itemName}</h1>
                    <h4>{itemPrice}</h4>
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default Item;