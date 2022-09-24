import React from 'react';
import  NavBar  from './componentes/Header/NavBar';
import  ItemListContainer  from './componentes/Productos/ItemListContainer';
import ItemDetailContainer from './componentes/Productos/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from'./componentes/Productos/Cart'
import CartContextProvider from './componentes/Productos/CartContext';
import './App.css';
import 'boxicons';



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:categoria" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route exact path="cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
