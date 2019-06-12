import React from 'react';
import "./index.css";
import { Link } from "react-router-dom";

class Category extends React.Component {
    render() {
        const { itemName } = this.props;
        const url = `/${itemName}`;
        return (
            <Link to={url}>
                <div className="category-con">
                    <span className="category-name">{itemName}</span>
                </div>
            </Link>
        );
    }
}

export default Category;