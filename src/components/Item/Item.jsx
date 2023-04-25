import React from "react";

const Item = ({ product }) => {
    return (
        <div className="item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default Item;
