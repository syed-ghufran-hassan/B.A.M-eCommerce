import React from "react";

import { useSelector } from "react-redux";
import Product from "../Components/Product";

import "../styles/ProductPage.css";

function ProductPage() {
  const loading = useSelector((state) => state.products.loading);
  const hasErrors = useSelector((state) => state.products.hasErrors);
  const data = useSelector((state) => state.products.data);

  // Show loading, error, or success state
  const renderProducts = () => {
    if (loading) return <p>Loading product...</p>;
    if (hasErrors) return <p>Unable to display product.</p>;
    return data.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  return <div>{renderProducts()}</div>;
}

export default ProductPage;
