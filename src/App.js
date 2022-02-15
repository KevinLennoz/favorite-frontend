import Header from './components/Header';
import './style/App.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopPages from './pages/ShopPages';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState({
    cart: {},
    user: {},
  })

  useEffect(() => {
    fetch('http://localhost:9090/users/3') //User 3 en dur
    .then(response => response.json())
    .then(jsonResponse => setState({
      cart: {
        oderLines: [],
        totalPrice: 0.00
      },
      user: jsonResponse,
    }))
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Header cart={state.cart} user={state.user}/>
      <Routes className="body">
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/*" element={<ShopPages/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
