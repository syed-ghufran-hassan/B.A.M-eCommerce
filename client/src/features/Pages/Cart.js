import React from "react";
import "../styles/Cart.css";
import { useSelector, useDispatch } from "react-redux";

import {
  cartAddOrSubtractProduct,
  cartRemoveProduct,
  cartClear,
} from "../../actions/CartAction";

import { FaCaretLeft, FaCaretRight, FaDollarSign, FaWindowClose } from "react-icons/fa";

export default function Cart() {
  const data = useSelector((state) => state.cart.data || []); // Handle missing state
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return <h2 className="Cart-Empty-Title">Your cart is empty right now</h2>;
  };

  const handleQuantityChange = (item, value) => {
    const quantity = parseInt(value, 10);
    if (isNaN(quantity) || quantity <= 0) return; // Prevent invalid or negative inputs
    dispatch(cartAddOrSubtractProduct(item.product, quantity - item.quantity));
  };

  const FilledCart = () => {
    return (
      <div className="Products-Bag">
        {data.map((item, id) => (
          <div className="Products-Grid" key={id}>
            <div>
              <img
                className="Cart-Image"
                src={item.product.image || ""}
                alt={item.product.title || "Product Image"}
              ></img>
            </div>
            <div>{item.product.title || "Unnamed Product"}</div>
            <div>
              <div className="product-quantity cart-quantity-check">
                <label
                  htmlFor="product-quantity-input"
                  className="product-quantity-label cart-quantity-label"
                >
                  Quantity
                </label>
                <div className="product-quantity-subtract cart-quantity-subtract">
                  <i
                    className="FaCaretLeft quantity-left-btn-cart"
                    onClick={() =>
                      item.quantity > 1 && dispatch(cartAddOrSubtractProduct(item.product, -1))
                    }
                  >
                    <FaCaretLeft size={28} />
                  </i>
                </div>
                <div>
                  <input
                    type="text"
                    id="product-quantity-input"
                    className="cart-quantity-input"
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                    value={item.quantity}
                  />
                </div>
                <div className="product-quantity-add cart-quantity-add">
                  <i
                    className="FaCaretRight quantity-right-btn-cart"
                    onClick={() => dispatch(cartAddOrSubtractProduct(item.product, 1))}
                  >
                    <FaCaretRight size={28} />
                  </i>
                </div>
              </div>
            </div>

            <div className="product-price">
              <FaDollarSign className="curency-prise" size={20} />
              {
                Number(item.product.price * item.quantity)
                  .toFixed(2)
                  .toString()
                  .split(".")[0]
              }
              <span className="product-price-cents">
                {
                  Number(item.product.price * item.quantity)
                    .toFixed(2)
                    .toString()
                    .split(".")[1]
                }
              </span>
            </div>

            <div
              className="close"
              onClick={() => dispatch(cartRemoveProduct(item.product))}
            >
              <i className="FaChevronLeft close-icon">
                <FaWindowClose size={28} />
              </i>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const totalAmount = data
    .reduce(
      (acc, current) => (acc += current.product.price * current.quantity),
      0
    )
    .toFixed(2);

  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-Cart">YOUR CART PRODUCTS</h1>
      </div>
      <div className="Products-Container">
        <div>
          <h2 className="Bag-Title">Shopping Bag</h2>
        </div>
        {data.length === 0 ? <EmptyCart /> : <FilledCart />}
        <div className="Total-Cart">
          <p className="Total-Text"> Total :</p>
          <i className="FaDollarSign currency-total-icon">
            <FaDollarSign size={28} />
          </i>
          <p className="Total-Cart-Amount">{totalAmount}</p>
        </div>
        <div className="Checkout-Button-Container">
          <button
            onClick={() => dispatch(cartClear())}
            disabled={data.length === 0} // Disable when cart is empty
          >
            Clear
          </button>
          <button disabled={data.length === 0}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
