import './App.css';
import React from 'react';
import Nav from './Components/Nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titlebar from './Components/Titlebar';
import { useState } from 'react';
import Cards from './Components/Cards';
import SideBar from './Components/SideBar';

function App() {
// sidebar state
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className="App">
          <Nav toggleDrawer={handleDrawerOpen}></Nav>
          <Titlebar></Titlebar>
          <SideBar open={open} toggleDrawer={handleDrawerClose}></SideBar>
          <Cards></Cards>
    </div>
  );
}

export default App;
