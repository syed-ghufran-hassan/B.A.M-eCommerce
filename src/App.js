import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// 1st party component
import Navbar from "./features/Components/Navbar";
import Footer from "./features/Components/Footer";

// pages
import HomePage from "./features/Pages/HomePage";
import About from "./features/Pages/About";
import Shop from "./features/Pages/Shop";
import Contact from "./features/Pages/Contact";
import PageNotFound from "./features/Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" exact component={Contact} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
