import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Terms from './components/T&C/Terms';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/terms" component={Terms} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
