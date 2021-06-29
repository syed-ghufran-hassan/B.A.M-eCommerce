import React from 'react';
import '../styles/Cart.css';
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {

  const data = useSelector((state) => state.cart.data);
  console.log(data);

  const dispatch = useDispatch;

  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-Cart">YOUR CART PRODUCTS</h1>
      </div>
      <div className="Products-Container">
        {data.map((cartItem, id) => (
          <div>
            <div>id: {cartItem.product.id}</div>
            <div>title: {cartItem.product.title}</div>
            - <div>quantity: {cartItem.quantity}</div> +
          </div>
        ))}
      </div>
    </div>
  )
}