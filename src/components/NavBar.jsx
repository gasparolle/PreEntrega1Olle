import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return <> 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='contenedor'>
        <Navbar.Brand href="#">Argen Camaras</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Nikon</Nav.Link>
            <Nav.Link href="#">Canon</Nav.Link>
            <Nav.Link href="#">Lentes</Nav.Link>
            <Nav.Link href="#">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
  
    </Navbar>
   
    </>;
}