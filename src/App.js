import "./App.css";
import React from "react";
import Nav from "./Components/Nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import HomePageCards from "./Components/HomePageCards";
import SideBar from "./Components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmarks from "./Components/Bookmarks";
import SpecificChannels from "./Components/SpecificChannels";

// images
import newspng from './Images/news.png';


function App() {

  // titlebar news icon
  const [icon, seticon] = useState(newspng)

  // sidebar state
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);


  // for choosing the channel
  const [currentchannel, setcurrentchannel] = useState("hindustantimes.com");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Nav toggleDrawer={handleDrawerOpen} icon={newspng}></Nav>
                <SideBar open={open} toggleDrawer={handleDrawerClose} currentchannel={currentchannel} setcurrentchannel={setcurrentchannel}></SideBar>
                <HomePageCards />
              </div>
            }
          />

          <Route
            path="/bookmarks"
            element={
              <div>
                <Nav toggleDrawer={handleDrawerOpen} icon={newspng}></Nav>
                <SideBar open={open} toggleDrawer={handleDrawerClose} currentchannel={currentchannel} setcurrentchannel={setcurrentchannel}></SideBar>
                <Bookmarks />
              </div>
            }
          />

          <Route
            path="/specificnews"
            element={
              <div>
                <Nav toggleDrawer={handleDrawerOpen} icon={icon}></Nav>
                <SideBar open={open} toggleDrawer={handleDrawerClose} seticon={seticon} setcurrentchannel={setcurrentchannel}></SideBar>
                <SpecificChannels currentchannel={currentchannel} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
