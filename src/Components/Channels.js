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
import { Link } from "react-router-dom";
import { useState } from "react";

function Channels({ selectedIndex, handleListItemClick, currentchannel, setcurrentchannel }) {


  return (
    <div>
      <p className="sidebar_titles">News</p>
      <List>
        {SidebarCat.map((title) => (
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={title.link}
          >
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
          </Link>
        ))}
      </List>

      <p className="sidebar_titles">Top Channels</p>
      <List>
        {NewsChannels.map((item) => (
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/specificnews"
          >
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                className="MenuItem"
                id={"pop" + item.id}
                selected={selectedIndex === item.id}
                onClick={(event) => {
                  handleListItemClick(event, item.id);
                  setcurrentchannel(item.value);
                }}
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
          </Link>
        ))}
      </List>
    </div>
  );
}

export default Channels;
