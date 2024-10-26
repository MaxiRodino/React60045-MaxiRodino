import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';


const NavbarEcommerce = ({data}) => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary" >            
            <Container>
                <Navbar.Brand as={Link} to={"/"}>TiendaMov</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav  className="me-auto">
                        <Nav.Link as={Link} to={"/cart"}><CartWidget /></Nav.Link>
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <NavDropdown title="Categorias" id="categoryMenu">
                            <NavDropdown.Item as={Link} to={'categorie/accesorios-para-vehiculos-MLA5725'}>Accesorios para vehiculos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'categorie/herramientas-MLA407134'}>Herramientas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'categorie/ropa-y-accesorios-MLA1430'}>Ropa y Accesorios</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'categorie/autos-motos-y-otros-MLA1743'}>Autos motos y otros</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'categorie/hogar-muebles-y-jardin-MLA1574'}>Hogar Muebles y Jardin</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'categorie/camaras-y-accesorios-MLA1039'}>Cámaras y Accesorios</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default NavbarEcommerce;