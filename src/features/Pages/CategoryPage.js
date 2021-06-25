import React from 'react'
import '../styles/CategoryPage.css';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';

function CategoryPage() {

  const data = useSelector(state => state);
  console.log("DATA", data.products.data[3]);
  const dispatch = useDispatch();

  return (
    <div className="Container">
      <div className="Products-Title">
        <h1>Our Products</h1>
      </div>
      <div className="Categories-Products">
        <div className="Categories">
          <h3 className="Category-Title">Filter by Categories</h3>
          <button onClick={() => dispatch({ type: "GET_PRODUCTS" })} >Women Clothing</button>
          <button onClick={() => dispatch({ type: "GET_PRODUCTS" })} >Men Clothing</button>
        </div>
        <div className="Cards-Container">
          {data.products.data.map((item, id) => (
            <Cards
              key={id}
              product={item}
              itemIndex={id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;
