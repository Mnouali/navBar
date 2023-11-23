import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import"./navbar.css"

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" style={{backgroundColor:"black"}}>
      <Container>
        <Navbar.Brand style={{color:"white"}} >LOGO</Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:"white"}}
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse  >
          <Nav  style={{marginLeft:"100px"}}  >
                <Link className='Nav1'>Sign in</Link>
                <Link className='Nav1' >Sign up</Link>
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;