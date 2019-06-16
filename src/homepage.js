import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Category extends React.Component {
    render() {
        let { itemName } = this.props;
        itemName = itemName[0].toUpperCase() + itemName.slice(1).toLowerCase();
        const url = `/${itemName}`;
        return (
            <Link className="category-con-link" to={url}>
                <div className="category-con">
                    <span>{itemName}</span>
                </div>
            </Link>
        );
    }
}

class Homepage extends React.Component {
    render() {
        const categories = [];
        const { categoriesHeading } = this.props;
        categoriesHeading.forEach(category => {
            categories.push(<Category key={category} itemName={category} />);
        });
        return <div className="vh-center">{categories}</div>;
    }
}

export default Homepage;
