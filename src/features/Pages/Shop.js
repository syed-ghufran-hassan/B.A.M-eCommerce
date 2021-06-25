import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards";
import CardSkeleton from "../Components/CardSkeleton";
import ProductModal from "../Components/ProductModal";
import { fetchProducts } from "../../actions/ProductAction";
import "../styles/CategoryPage.css";
import * as categoryTypes from "../../types/Category";
import "../styles/Product.css";

function Shop() {
  const loading = useSelector((state) => state.products.loading);
  const hasErrors = useSelector((state) => state.products.hasErrors);
  const data = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(categoryTypes.WOMENS_CLOTHING));
  }, [dispatch]);

  const initialState = {};

  const [selectedProduct, setSelectedProduct] = useState(initialState);

  const handleProductSelected = (product) => {
    setSelectedProduct(product);
  };

  const handleProductUnselected = () => {
    setSelectedProduct(initialState);
  };

  const renderProductCards = () => {
    if (loading)
      return (
        <div className="Cards-Container">
          {Array(9).fill().map((item, id) => (
            <CardSkeleton
              key={id}
              product={item}
              itemIndex={id}
              onProductSelected={handleProductSelected}
            />
          ))}
        </div>
      );
    if (hasErrors) return <p>Unable to display product.</p>;
    return (
      <div className="Cards-Container">
        {data.map((item, id) => (
          <Cards
            key={id}
            product={item}
            itemIndex={id}
            onProductSelected={handleProductSelected}
          />
        ))}
      </div>
    );
  };

  // Show loading, error, or success state
  const renderProducts = () => {
    return (
      <div className="Container">
        <div className="Title-Container">
          <h1 className="Title">Our Products</h1>
        </div>
        <ProductModal
          product={selectedProduct}
          onProductUnselected={handleProductUnselected}
        />
        <div className="Categories-Products-Container">
          <div className="Categories">
            <h3 className="Category-Title">Filter by Categories</h3>
            <button
              onClick={() =>
                dispatch(fetchProducts(categoryTypes.WOMENS_CLOTHING))
              }
            >
              Women Clothing
            </button>
            <button
              onClick={() =>
                dispatch(fetchProducts(categoryTypes.MENS_CLOTHING))
              }
            >
              Men Clothing
            </button>
          </div>
          {renderProductCards()}
        </div>
      </div>
    );
  };

  return renderProducts();
}

export default Shop;
