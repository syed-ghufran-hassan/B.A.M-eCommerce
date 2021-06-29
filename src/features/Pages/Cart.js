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
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return <h2>Your cart is empty right now</h2>;
  };

  const FilledCart = () => {
    return (
      <div className="Products-Bag">
        {data.map((item, id) => (
          <div className="Products-Grid">
            <div>
              <img className="Cart-Image" src={item.product.image} alt=""></img>
            </div>
            <div>{item.product.title}</div>
            <div className="Align-Cart-Counters">
              <div className="product-price ">
                <FaDollarSign className="curency-prise" size={20} />
                {item.product.price
                  ? item.product.price.toString().split(".")[0]
                  : 0}
                <span className="product-price-cents">
                  {item.product.price
                    ? item.product.price.toString().split(".")[1]
                    : 0}
                </span>
              </div>

              <div className="product-quantity cart-quantity-check">
                <label
                  htmlFor="product-quantity-input product-quantity-input"
                  className="product-quantity-label cart-quantity-label"
                >
                  Quantity
                </label>
                <div className="product-quantity-subtract cart-quantity-subtract">
                  <i
                    className="FaCaretLeft quantity-left-btn-cart"
                    onClick={() =>
                      dispatch(cartAddOrSubtractProduct(item.product, -1))
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
                    onChange={() => {}}
                    value={item.quantity}
                  />
                </div>
                <div className="product-quantity-add cart-quantity-add">
                  <i
                    className="FaCaretRight quantity-right-btn-cart"
                    onClick={() =>
                      dispatch(cartAddOrSubtractProduct(item.product, 1))
                    }
                  >
                    <FaCaretRight size={28} />
                  </i>
                </div>
              </div>
            </div>

            <div className="product-price ">
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
              <i className="FaChevronLeft close-icon ">
                <FaWindowClose size={28} />
              </i>
            </div>
            {/*<div> <button
                onClick={() => dispatch(cartRemoveProduct(item.product))}
                className="Count-Buttons close-btn"
              >
                X
              </button> </div>*/}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-Cart">YOUR CART PRODUCTS</h1>
      </div>
      <div className="Products-Container">
        <div>
          <h2 className="Bag-Title">Shopping Bag</h2>
        </div>
        {data.size === 0 ? <EmptyCart /> : <FilledCart />}

        <div className="product-bottom">
          <div className="product-checkout cart-total-sum">
            Total sum:
            <div className="product-checkout-total cart-checkout-total">
              <i className="FaDollarSign currency-total-icon">
                <FaDollarSign size={28} />
              </i>
              <div className="product-checkout-total-amount cart-checkout-total-amount">
                {Number(
                  data
                    .reduce(
                      (acc, current) =>
                        (acc += current.product.price * current.quantity),
                      0
                    )
                    .toFixed(2)
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="product-checkout">
          Total sum: $
          {Number(
            data
              .reduce(
                (acc, current) =>
                  (acc += current.product.price * current.quantity),
                0
              )
              .toFixed(2)
          )}
        </div> */}
        <div className="Checkout-Button-Container">
          <button onClick={() => dispatch(cartClear())}>Clear</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
