import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

const NavbarIndex = () => {
    return (
        <Navbar className='colorNav navPrincipal' expand="lg">
        <Container>
          <Navbar.Brand href="#home" onClick={()=>window.scrollTo( 0, 0 )}><img style={{width:'70px'}} src="./assets/img/logoMate.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='containerMenu' id="basic-navbar-nav">
            <Nav className='containerMenu'>
              <Nav.Link className='menu' href="#home" onClick={()=>window.scrollTo( 0, 0 )}>INICIO</Nav.Link>
              <Nav.Link className='menu' href="#tech">HABILIDADES</Nav.Link>
              <Nav.Link className='menu' href="#proyect">PROYECTOS</Nav.Link>
              <Nav.Link className='menu' href="#contact">CONTACTOS</Nav.Link>
            </Nav>
            <div>
              <a href="https://github.com/EmilianoQuercia" target="_blank" rel="noopener noreferrer">
                <img className='iconoBtn' src="./assets/img/iconoGithubNav.png" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/emiliano-quercia/" target="_blank" rel="noopener noreferrer">
                <img className='iconoBtn' src="./assets/img/iconoLinkedin.png" alt="" />
              </a>
              <a href="https://www.youtube.com/@directoalcodigo4934" target="_blank" rel="noopener noreferrer">
                <img className='iconoBtn' src="./assets/img/logoYoutube.png" alt="" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarIndex;
