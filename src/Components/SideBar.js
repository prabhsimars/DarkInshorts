import React, { useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Button,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  TextField,
  InputAdornment,
} from "@mui/material";
import { NewsChannels } from "./NewsChannels";
import { SidebarCat } from "./SidebarCat";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

export default function SideBar({ open, toggleDrawer }) {
  // setting active and non active

  const [selectedIndex, setSelectedIndex] = useState(111);

  const handleListItemClick = (event, index) => {
    console.log(event.target.id, index)
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

              <p className="sidebar_titles">News</p>
              <List>
                {SidebarCat.map((title) => (
                  <ListItem key={title.id} disablePadding>
                    <ListItemButton 
                    className="MenuItem"
                    id={"listitem" + title.id}
                    selected={selectedIndex == title.id}
                    onClick={(event) => handleListItemClick(event,title.id)}
                  >
                      <ListItemIcon style={{color:"black"}}>{title.icon}</ListItemIcon>
                      <ListItemText primary={title.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <p className="sidebar_titles">Top Channels</p>
              <List>
                {NewsChannels.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton 
                    className="MenuItem"
                    id={"pop" + item.id}
                    selected={selectedIndex == item.id}
                    onClick={(event) => handleListItemClick(event,item.id)}>
                      <ListItemIcon>
                        <img
                          className="newschannelimages"
                          id={"newschannelimage" + item.id}
                          src={item.image}
                        ></img>
                      </ListItemIcon>
                      <ListItemText  primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
