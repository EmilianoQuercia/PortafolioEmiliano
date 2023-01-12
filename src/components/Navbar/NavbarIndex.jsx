import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

const NavbarIndex = () => {
    return (
        <Navbar className='colorNav navPrincipal' expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img style={{width:'70px'}} src="./assets/img/logoMate.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='containerMenu' id="basic-navbar-nav">
            <Nav className='containerMenu'>
              <Nav.Link className='menu' href="#home">INICIO</Nav.Link>
              <Nav.Link className='menu' href="#tech">HABILIDADES</Nav.Link>
              <Nav.Link className='menu' href="#link">PROYECTOS</Nav.Link>
              <Nav.Link className='menu' href="#link">CONTACTOS</Nav.Link>
            </Nav>
            <div>
              <img className='iconoBtn' src="./assets/img/iconoGithubNav.png" alt="" />
              <img className='iconoBtn' src="./assets/img/iconoLinkedin.png" alt="" />
              <img className='iconoBtn' src="./assets/img/logoYoutube.png" alt="" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarIndex;
