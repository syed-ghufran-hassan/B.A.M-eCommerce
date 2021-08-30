import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// 1st party component
import NavbarFunc from "./features/Components/Navbar";
import Footer from "./features/Components/Footer";

// pages
import HomePage from "./features/Pages/HomePage";
import About from "./features/Pages/About";
import Shop from "./features/Pages/Shop";
import Contact from "./features/Pages/Contact";
import Cart from "./features/Pages/Cart";
import PageNotFound from "./features/Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarFunc />
        <Switch>
          <Route path="/B.A.M-eCommerce/" exact component={HomePage} />
          <Route path="/B.A.M-eCommerce/about" exact component={About} />
          <Route path="/B.A.M-eCommerce/shop" exact component={Shop} />
          <Route path="/B.A.M-eCommerce/contact" exact component={Contact} />
          <Route path="/B.A.M-eCommerce/cart" exact component={Cart} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
