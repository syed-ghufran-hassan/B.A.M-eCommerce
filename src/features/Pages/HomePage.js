import React from "react";
import "../styles/HomePage.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../../actions/ProductAction";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>hiii</h1>
    </div>
  );
}

export default HomePage;
