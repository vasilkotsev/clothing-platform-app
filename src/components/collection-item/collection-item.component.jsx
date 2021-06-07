import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = (props) => {
  const { name, price, imageUrl } = props.item;
  return (
    <div className="collection-item">
      <div className="image-holder">
        <img className="image" src={`${imageUrl}`} alt="" />
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton className="inverted">Add to cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
