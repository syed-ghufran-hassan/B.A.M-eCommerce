import React from "react";
import "../styles/Product.css";

function ProductCard(props) {
  const handleOnClick = () => {
    props.onProductSelected(props.product);
  };

  return (
    <div className="product-details" onClick={handleOnClick}>
      <div>
        <div className="product-info">
          <div className="product-title">{props.product.title}</div>
          <div className="product-price">
            {props.product.price
              ? props.product.price.toString().split(".")[0]
              : 0}
            <span className="product-price-cents">
              {props.product.price
                ? props.product.price.toString().split(".")[1]
                : 0}
            </span>
          </div>
        </div>
        <div className="product-image">
          <img src={props.product.image} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
