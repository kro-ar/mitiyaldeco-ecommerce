import React from 'react';
import  NavBar  from './componentes/Header/NavBar';
import  ItemListContainer  from './componentes/Productos/ItemListContainer';
import ItemDetailContainer from './componentes/Productos/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'boxicons';



function App() {
  return (
    <div className="App">
      <Router>

      <NavBar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='category/:categoria' element={<ItemListContainer />} />
        <Route path='item/:id' element={<ItemDetailContainer/>} />
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
