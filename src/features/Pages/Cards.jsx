import React from 'react';
import '../styles/Card.css';

function Cards(props) {
  return (
    <div className="Card">
      <img className="Images-Products" src={props.product.image} alt="any product">
      </img>
      <h1>{props.product.title}</h1>
      <p class="Price">{props.product.price}</p>
      <p>{props.product.description}</p>
      <p><button>Add to Cart</button></p>
    </div>
  );
}

export default Cards;