import Header from './components/Header';
import './style/App.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopPages from './pages/ShopPages';
import HomePage from './pages/HomePage';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
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
