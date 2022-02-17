import Header from './components/Header';
import './style/App.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopPages from './pages/ShopPages';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState({
    cart: {
      orderLines: [],
      quantity: 0,
      totalPrice: 0.00
    },
    user: {},
  })

  useEffect(() => {
    fetch('http://localhost:9090/users/3') //User 3 en dur
    .then(response => response.json())
    .then(jsonResponse => setState({
      cart: {
        orderLines: [],
        quantity: 0,
        totalPrice: 0.00
      },
      user: jsonResponse,
    }))
  }, [])

  const addOrderLineToCart = (product, size, quantity, price, customs) => {
    let newOrderLines = state.cart.orderLines;
    newOrderLines.push({
      product: product,
      size: size,
      quantity: quantity,
      price: price,
      //totalPrice: totalPrice,
      customs: customs
    })
    console.log(newOrderLines)
    return setState({
      ...state,
      cart: {
        ...state.cart,
        orderLines: newOrderLines,
        totalPrice: state.cart.totalPrice + price,
        quantity: state.cart.quantity + quantity,
      }
    })
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Header cart={state.cart} user={state.user}/>
      <Routes className="body">
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/*" element={<ShopPages addToCart={addOrderLineToCart}/>} />
        <Route path="/cart" element={<Cart cart={state.cart}/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
