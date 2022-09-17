import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NAV() {
  return (
    <div id='navbardiv'>
        <Navbar fixed="top" bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand  className='navbar-brand m-auto'>
                Top <b></b>𝟷൦൦<b></b>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default NAV;