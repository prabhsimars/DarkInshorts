import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdKeyboardArrowLeft,MdToday} from "react-icons/md";
import {BsSearch,BsFillBookmarksFill,BsClockFill} from 'react-icons/bs';
import {Table,Offcanvas, InputGroup, Form} from "react-bootstrap";
import { NewsChannels } from "./NewsChannels";



function Sidebar({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <div className="sideBar">
      <Offcanvas
        id="offcanvassidebar"
        show={show}
        onHide={handleClose}
        backdrop={true}
        scroll={true}
      >
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
          <MdKeyboardArrowLeft className="sidebarClose" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvassidebarbody">
          <div id="searchBar">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"><BsSearch/></InputGroup.Text>
              <Form.Control
                id="sidebarSearcher"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search"
              />
            </InputGroup>
          </div>

          {/* favs and history */}
          <div className="favs_history">
            <p className="sidebar_titles">News</p>
            <Table hover size="sm" borderless={true}>
              <tbody>
             
              <tr class="panel active">
                  <td><MdToday className="sidebarIcons"/></td>
                  <td>Today</td>
                </tr>

                <tr class="panel">
                  <td><BsFillBookmarksFill className="sidebarIcons"/></td>
                  <td>Bookmarks</td>
                </tr>
               
                <tr class="panel">
                  <td><BsClockFill className="sidebarIcons"/></td>
                  <td>History</td>
                </tr>
              </tbody>
            </Table>

            <p className="sidebar_titles">Top Channels</p>
            <Table hover size="sm" borderless={true}>
              <tbody>
                {NewsChannels.map((item)=>{
                  return(
                    <tr>
                      <td><img className="newschannelimages" id={"newschannelimage"+item.id} src={item.image}  alt={item.name} /></td>
                      <td>{item.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}



export default Sidebar;
