import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  // state = {
  //   collections: SHOP_DATA,
  // };

  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => (
          <CollectionPreview key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
