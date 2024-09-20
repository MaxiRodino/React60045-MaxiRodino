import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import CartWidget from './CartWidget'

const NavbarEcommerce = ({data}) => {
    console.log(data?.then((response) => response))
    return(
        <Navbar expand="lg" className="bg-body-tertiary" >
            
            <Container>
                <Navbar.Brand href="#home">TiendaMov</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav  className="me-auto">
                        <Nav.Link href="#"><CartWidget /></Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Categorias" id="categoryMenu">
                            <NavDropdown.Item href="#"></NavDropdown.Item>
                            <NavDropdown.Item href="#">Electrodomesticos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Herramientas</NavDropdown.Item>
                            <NavDropdown.Item href="#">Ropa</NavDropdown.Item>
                            <NavDropdown.Item href="#">Autos, motos, otros</NavDropdown.Item>
                            <NavDropdown.Item href="#">Muebles</NavDropdown.Item>
                            <NavDropdown.Item href="#">Electronica</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarEcommerce;