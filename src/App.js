import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Navbar from "./features/Components/Navbar";
import Footer from "./features/Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryPage from "./features/Pages/CategoryPage";
import HomePage from "./features/Pages/HomePage";
import ProductPage from "./features/Pages/ProductPage";
import PageNotFound from "./features/Pages/PageNotFound";

function App() {
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
