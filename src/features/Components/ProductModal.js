import { useState } from "react";
import { useEffect } from "react";

import logo from "../img/logo.png";

function ProductModal(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (props.product.id) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [props.product]);

  const handleClose = () => {
    props.onProductUnselected();
  };

  return (
    <div
      className="lightbox-blanket"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="pop-up-container">
        <div className="pop-up-container-vertical">
          <div className="pop-up-wrapper">
            <div className="go-back" onClick={handleClose}>
              <i className="fa fa-arrow-left" />
            </div>
            <div className="product-details">
              <div className="product-left">
                <div className="product-info">
                  <div className="product-manufacturer">
                    <img width="80px" src={logo} />
                  </div>
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
              <div className="product-right">
                <div className="product-description">
                  {props.product.description}
                </div>
                <div className="product-available">
                  In stock.{" "}
                  <span className="product-extended">
                    <a href="#">Buy Extended Warranty</a>
                  </span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star rating" star-data={1} />
                  <i className="fa fa-star rating" star-data={2} />
                  <i className="fa fa-star rating" star-data={3} />
                  <i className="fa fa-star" star-data={4} />
                  <i className="fa fa-star" star-data={5} />
                  <div className="product-rating-details">
                    (3.1 - <span className="rating-count">1203</span> reviews)
                  </div>
                </div>
                <div className="product-quantity">
                  <label
                    htmlFor="product-quantity-input"
                    className="product-quantity-label"
                  >
                    Quantity
                  </label>
                  <div className="product-quantity-subtract">
                    <i className="fa fa-chevron-left" />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="product-quantity-input"
                      placeholder={0}
                      defaultValue={0}
                    />
                  </div>
                  <div className="product-quantity-add">
                    <i className="fa fa-chevron-right" />
                  </div>
                </div>
              </div>
              <div className="product-bottom">
                <div className="product-checkout">
                  Total Price
                  <div className="product-checkout-total">
                    <i className="fa fa-usd" />
                    <div className="product-checkout-total-amount">0.00</div>
                  </div>
                </div>
                <div className="product-checkout-actions">
                  <a
                    className="add-to-cart"
                    href="#"
                    onClick={() => console.log("add to cart")}
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
