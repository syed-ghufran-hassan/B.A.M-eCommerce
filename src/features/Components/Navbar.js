import React from 'react'
import { BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
  } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import CategoryPage from '../Pages/CategoryPage';
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import PageNotFound from '../Pages/PageNotFound';
import "../styles/Navbar.css"

function Content() {
  const location = useLocation();
  return (
    <div>
      <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300} key={location.key}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/categories" exact component={CategoryPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
      </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function Navbar() {
  return (
    <Router>
      <div className="Navbar">
        <NavLink
        className="headerLink"
        activeClassName="is-active"
        activeStyle={{ color: "hotpink" }}
        exact="true"
        to="/"
        >
        Home
        </NavLink>
    <NavLink
        className="headerLink"
        activeClassName="is-active"
        activeStyle={{ color: "hotpink" }}
        to="/category"
        >
        Category
        </NavLink>
        <NavLink
        className="headerLink"
        activeClassName="is-active"
        activeStyle={{ color: "hotpink" }}
        to="/product"
        >
        Product
        </NavLink>
        </div>
        <Content />
  </Router>
  )
}

export default Navbar;
