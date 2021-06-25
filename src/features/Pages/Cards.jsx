import React from 'react';
import '../styles/Card.css';

function Cards(props) {
  const handleOnClickDetails = () => {
    props.onProductSelected(props.product);
  };

  return (
    <div className="Card">
      <img className="Images-Products" src={props.product.image} alt="any product">
      </img>
      <h1>{props.product.title}</h1>
      <p className="Price">{props.product.price}</p>
      <button onClick={handleOnClickDetails}>Details</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Cards;