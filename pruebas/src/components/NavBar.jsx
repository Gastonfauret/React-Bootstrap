import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css'

function NavBar() {
    return (
        <Navbar expand="lg" className="container-style" fixed="top">
            <Container fluid className='barra-navegacion-container'>
                <Navbar.Brand href="#">Logo de Producto</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navbar-collapse"
                        style={{ maxHeight: '500px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Productos</Nav.Link>
                        <Nav.Link href="#action3">Servicios</Nav.Link> 
                        <Nav.Link href="#action4">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#action5">Atencion</Nav.Link>
                        {/* <Nav.Link href="#action6">Contacto</Nav.Link>                             */}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;