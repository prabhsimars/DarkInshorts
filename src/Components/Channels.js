import React, { useState } from "react";
import "../App.css";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material";
import { NewsChannels } from "./NewsChannels";
import { SidebarCat } from "./SidebarCat";

function Channels() {
  // setting active and non active

  const [selectedIndex, setSelectedIndex] = useState(111);

  const handleListItemClick = (event, index) => {
    console.log(event.target.id, index);
    setSelectedIndex(index);
  };

  return (
    <div>
      <p className="sidebar_titles">News</p>
      <List>
        {SidebarCat.map((title) => (
          <ListItem key={title.id} disablePadding>
            <ListItemButton
              className="MenuItem"
              id={"listitem" + title.id}
              selected={selectedIndex === title.id}
              onClick={(event) => handleListItemClick(event, title.id)}
            >
              <ListItemIcon style={{ color: "black" }}>
                {title.icon}
              </ListItemIcon>
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
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}
            >
              <ListItemIcon>
                <img
                  className="newschannelimages"
                  id={"newschannelimage" + item.id}
                  src={item.image}
                  alt={""}
                ></img>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Channels;
