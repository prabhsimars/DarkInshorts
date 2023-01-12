import React from "react";
import "../App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Channels from "./Channels";

export default function SideBar({ open, toggleDrawer, currentchannel, setcurrentchannel }) {

   // drawer selection settings
   const [selectedIndex, setSelectedIndex] = useState(111);

   const handleListItemClick = (event, index) => {
     console.log(event.target.id, index);
     setSelectedIndex(index);
   };
 

  return (
    <div id="offcanvassidebar">
      {
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            open={open}
            transitionDuration={400}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            
          >
            <Box sx={{ width: "left" ? "auto" : 200 }} role="presentation" className="SwipeableDrawer">
              <div style={{ textAlign: "right" }}>
                <Button color="inherit" onClick={toggleDrawer}>
                  <MdKeyboardArrowLeft id="sidebarClose" />
                </Button>
              </div>
              <div id="sidebarSearcher">
                <TextField
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "90%" }}
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BsSearch />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              {/* all sidebar content */}
              <Channels selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} currentchannel={currentchannel} setcurrentchannel={setcurrentchannel}/>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
