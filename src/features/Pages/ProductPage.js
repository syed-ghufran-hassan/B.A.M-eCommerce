import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import ProductModal from "../Components/ProductModal";

import "../styles/ProductPage.css";

function ProductPage() {
  const loading = useSelector((state) => state.products.loading);
  const hasErrors = useSelector((state) => state.products.hasErrors);
  const data = useSelector((state) => state.products.data);

  const [selectedProduct, setSelectedProduct] = useState({});

  const handleProductSelected = (product) => {
    setSelectedProduct(product);
    console.log("product selected");
  };

  const handleProductUnselected = () => {
    setSelectedProduct({});
    console.log("product unselected");
  };

  // Show loading, error, or success state
  const renderProducts = () => {
    if (loading) return <p>Loading product...</p>;
    if (hasErrors) return <p>Unable to display product.</p>;
    return (
      <div>
        <ProductModal
          product={selectedProduct}
          onProductUnselected={handleProductUnselected}
        />
        <div className="product-background">
          <div className="itemlist">
            <div className="itemlist-item-wrapper">
              {data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductSelected={handleProductSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return renderProducts();
}

export default ProductPage;
