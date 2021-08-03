import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/details" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/wishlist" component={Wishlist} exact />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
