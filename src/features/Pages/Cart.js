import React from "react";
import "../styles/Cart.css";
import { useSelector, useDispatch } from "react-redux";

import {
  cartAddOrSubtractProduct,
  cartRemoveProduct,
  cartClear,
} from "../../actions/CartAction";

export default function Cart() {
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return <h2>Your cart is empty right now</h2>;
  };

  const FilledCart = () => {
    return (
      <div className="Products-Bag">
        {data.map((item) => (
          <div className="Products-Grid">
            <div>
              <img className="Cart-Image" src={item.product.image} alt=""></img>
            </div>
            <div>{item.product.title}</div>
            <div className="Align-Cart-Counters">
              <p>Quantity: {item.quantity}</p>
              <div className="Cart-Buttons">
                <button
                  onClick={() =>
                    dispatch(cartAddOrSubtractProduct(item.product, 1))
                  }
                  className="Count-Buttons"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch(cartAddOrSubtractProduct(item.product, -1))
                  }
                  className="Count-Buttons"
                >
                  -
                </button>
              </div>
            </div>
            <div> $ {item.product.price * item.quantity}</div>
            <div>
              <button
                onClick={() => dispatch(cartRemoveProduct(item.product))}
                className="Count-Buttons"
              >
                X
              </button>
            </div>
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
        <div>
          Total sum: $
          {data.reduce(
            (acc, current) => (acc += current.product.price * current.quantity),
            0
          )}
        </div>
        <div className="Checkout-Button-Container">
          <button onClick={() => dispatch(cartClear())}>Clear</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
