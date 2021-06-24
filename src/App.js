import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

// 1st party component
import Navbar from "./features/Components/Navbar";
import Footer from "./features/Components/Footer";
import CategoryPage from "./features/Pages/CategoryPage";
import HomePage from "./features/Pages/HomePage";
import ProductPage from "./features/Pages/ProductPage";
import PageNotFound from "./features/Pages/PageNotFound";

import { fetchProducts } from "./actions/ProductAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" exact component={CategoryPage} />
          <Route path="/product" exact component={ProductPage} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
