import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import newspng from '../Images/news.png';

function Titlebar() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(Date.now());
  let day = weekday[date.getDay()];

  return (
    <div className="titleBar">
      <Navbar>
        <Container className="shittitle">
          <Navbar.Brand >
            <div id="titleaa">NEWS</div>
            <div id="dayaa">{day}</div>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <img id="title_image" src={newspng} alt={""}></img>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="boxforbottomborder"></div>
    </div>
  );
}

export default Titlebar;
