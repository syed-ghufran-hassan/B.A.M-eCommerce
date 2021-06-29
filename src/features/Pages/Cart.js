import React from 'react';
import '../styles/Cart.css';
import { useSelector } from "react-redux";

export default function Cart() {

  const data = useSelector((state) => state.cart.data);
  console.log("This is data", data);

  const isEmpty = !data.length;
  console.log(data.length);

  const EmptyCart = () => {
    return <h2>Your cart is empty right now</h2>
  }

  const Counter = () => {
    console.log("counting");
  }

  const FilledCart = () => {
    return (
      <div className="Products-Bag">
        {data.map((item) => (
          <div className="Products-Grid">
            <div><img className="Cart-Image" src={item.product.image} alt=""></img></div>
            <div>{item.product.title}</div>
            <div className="Align-Cart-Counters">
              <p>Quantity: {item.quantity}</p>
              <div className="Cart-Buttons">
                <button onClick={Counter} className="Count-Buttons">+</button>
                <button className="Count-Buttons">-</button>
              </div>
            </div>
            <div> &euro; {item.product.price}</div>
          </div>
        ))}
      </div>
    )
  }



  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-Cart">YOUR CART PRODUCTS</h1>
      </div>
      <div className="Products-Container">
        <div>
          <h2 className="Bag-Title">Shopping Bag</h2>
        </div>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
        <div className="Checkout-Button-Container">
          <button>Checkout</button>
        </div>
      </div>

    </div>
  )
}