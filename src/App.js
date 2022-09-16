import React from 'react';
import  NavBar  from './componentes/Header/NavBar';


import ItemDetailContainer from './componentes/Productos/ItemDetailContainer';
import './App.css';
import 'boxicons';



function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
