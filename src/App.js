import React from 'react';
import  NavBar  from './componentes/Header/NavBar';
import  ItemListContainer  from './componentes/Productos/ItemListContainer';
import  ItemCount  from './componentes/Productos/ItemCount';
import './App.css';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount  initial={1} stock={5} />
    </div>
  );
}

export default App;
