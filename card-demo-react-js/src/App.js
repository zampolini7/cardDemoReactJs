import React from 'react';
import { CardListContainer } from "./containers/CardListContainer";
import { AddNewCardForm } from "./components/AddNewCardForm";
import { Error404 } from "./components/Error404";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {

  return ( 

    <div>
      <h2>TARJETERO MOVIL WA8</h2>
        <hr />
      <BrowserRouter>
        
        <Link to='/'>
          Home  
        </Link>
        <Link to='/add-card'>
          Add Card
        </Link>

     
          <Routes>
            <Route path='/' element={<CardListContainer/>}/>

            <Route path='/add-card' element={<AddNewCardForm/>}/>

            <Route path='*' element={<Error404/>}/>

          </Routes>
       
       
      </BrowserRouter>      
      {/* <AddNewCardButton /> */}
  
     

    </div>
  );
}

export default App;
