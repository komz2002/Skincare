import React from 'react';
import { Link } from 'react-router-dom';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  "./styles/Navbar.css";

function CustomNavbar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/about"className="abou">About</Nav.Link>
            <Nav.Link as={Link} to="/services"className="abou">Services</Nav.Link>
            <Nav.Link as={Link} to="/newPatients"className="abou">New Patinents</Nav.Link>
            <Navbar.Brand as={Link} to="/"className="log"><img
         src="https://www.holycityorthodontics.com/wp-content/uploads/2022/10/holy-city-orthodontics-horizontal-logo.png"
         alt=""/></Navbar.Brand>
         <Nav.Link as={Link} to="/referPatients"className="abou">Refer patients</Nav.Link>
            <Nav.Link as={Link} to="/contact"className="abou">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
   
      </Container>

    </Navbar>

    <center className="button1">
      <Link to="/button">
        <button className="free">Book Free Consult</button>
      </Link>
    </center>
    
         </>
  );
}

export default CustomNavbar;
