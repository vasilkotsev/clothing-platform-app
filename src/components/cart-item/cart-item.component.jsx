import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-img-holder">
        <img className="cart-item-img" src={imageUrl} alt="item" />
      </div>
      <div className="cart-item-info">
        <span className="cart-item-name">{name}</span>
        <span className="cart-item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
