import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BsLayoutTextSidebarReverse} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

function NAV({toggleDrawer}) {

  
  return (
    <div id='navbardiv'>
      {/* top navbar */}
      <Navbar bg="light" variant="light" className='shadow-sm bg-white rounded' fixed="top" >
      <Container>
        <Navbar.Brand><BsLayoutTextSidebarReverse className='navIcon' onClick={toggleDrawer}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CgProfile className='navIcon'/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NAV;