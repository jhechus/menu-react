import '../index.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

function Navegacion() {
  return (
    <>
      <Navbar className='bgnav' expand="lg">
        <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand as={Link} to='/'> LASSA </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'> Inicio </Nav.Link>
              <Nav.Link as={Link} to='/About'> Nosotros </Nav.Link>
              <NavDropdown title="Galeria" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/Trabajos'> Trabajos </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Clientes'> Clientes </NavDropdown.Item>
                { /*<NavDropdown.Divider /> */}
                <NavDropdown.Item as={Link} to='/Normas'> Normas </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/Contact'> Contacto </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Outlet></Outlet>
    </>
  )
}

export default Navegacion
