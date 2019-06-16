import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Homepage from "./homepage.js";
import Fashion from "./fashion.js";
import Sports from "./sports.js";
import Electronics from "./electronics.js";
import NotFound from "./not-found.js";
import fkart from "./app-data.js";
import Buynow from "./buynow.js";

class Navbar extends React.Component {
    searchItems = event => {
        const filteredItemNames = [];
        const { value } = event.target;
        const { itemNames} = this.props;
        for (let index = 0; index < itemNames.length; index++ ) {
            if (itemNames[index].indexOf(value.toLowerCase()) !== -1) {
                console.log(value);
                filteredItemNames.push(itemNames[index]);
            }
        }
        // console.log(filteredItemNames);
    };
    render() {
        return (
            <div className="navbar">
                <label className="navbar-name">fakru-kart</label>
                <input
                    placeholder="search..."
                    className="navbar-search"
                    type="text"
                    onChange={this.searchItems}
                />
                <Link to="/buy-now">
                    <div className="navbar-cart">
                        Cart{" "}
                        <span className="navbar-cart-quantity">
                            {this.props.quantity}
                        </span>
                    </div>
                </Link>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        cartItems: []
    };
    
    filterItemNames = () => {
        const allItemNames = [];
        const { categories } = fkart;
        for (let category in categories) {
            categories[category].items.forEach(item => {
                allItemNames.push(item.name.toLowerCase());
            });
        }
        return allItemNames;
    };

    extractCategoriesHeading = () => {
        const categoriesHeading = [];
        for (let category in fkart.categories) {
            categoriesHeading.push(category);
        }
        return categoriesHeading;
    };

    addToCart = (itemName, quantity) => {
        let flag = false;
        const { cartItems } = this.state;
        if (cartItems.length === 0) {
            const cartItem = {};
            cartItem[itemName] = quantity;
            cartItems.push(cartItem);
        } else {
            for (let item = 0; item < cartItems.length; item++) {
                if (cartItems[item].hasOwnProperty(itemName)) {
                    cartItems[item][itemName] += quantity;
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                const cartItem = {};
                cartItem[itemName] = quantity;
                cartItems.push(cartItem);
            }
        }
        this.setState({
            cartItems
        });
    };

    render() {
        const { electronics, sports, fashion } = fkart.categories;
        const { cartItems } = this.state;
        return (
            <Router>
                <Navbar itemNames={this.filterItemNames()} quantity={cartItems.length} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Homepage
                                categoriesHeading={this.extractCategoriesHeading()}
                            />
                        )}
                    />
                    <Route
                        path="/electronics"
                        component={() => (
                            <Electronics
                                electronicsData={electronics}
                                addToCart={this.addToCart}
                            />
                        )}
                    />
                    <Route
                        path="/sports"
                        component={() => (
                            <Sports
                                sportsData={sports}
                                addToCart={this.addToCart}
                            />
                        )}
                    />
                    <Route
                        path="/fashion"
                        component={() => (
                            <Fashion
                                fashionData={fashion}
                                addToCart={this.addToCart}
                            />
                        )}
                    />
                    <Route
                        path="/buy-now"
                        component={() => <Buynow cartItems={cartItems} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
