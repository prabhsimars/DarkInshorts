import './App.css';
import React from 'react';
import Nav from './Components/Nav.js';
import Card from './Components/Card';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shit from './Components/shit';

function App() {


  return (
    <div className="App">
      <Nav></Nav>
      <br></br>
      <br></br>
      {/* <Shit></Shit> */}
      <Card></Card>
      
    </div>
  );
}

export default App;
