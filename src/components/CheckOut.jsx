import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import AddOrder from "./AddOrder"

const CheckOut = () => {
    const [cart,,] = useContext(CartContext)
    let price = 0
    return(
        cart.length ? 
        <Container>
            <Row className="mt-5">
                <Col xs={12} className="mt-3 mb-4">Carrito de compras</Col>
                    {cart.map( element => {
                        price += element.price
                        return(
                        <Col key={element.id}>
                            <Card>
                                <Card.Img variant="top" src={element.pictures[0].url} className="img-thumbnail"/>
                                <Card.Body>
                                    <Card.Title>{element.description}</Card.Title>
                                    <Card.Text>${element.price}</Card.Text>
                                </Card.Body>
                            </Card>
                                <Button className="mt-5" onClick={() =>console.log("eliminar")}>Eliminar</Button>
                        </Col>
                        )
                    }
                    )}
                    <Col xs={12} className="mt-5"><span>Total: {price}</span></Col>
                    < AddOrder /> 
                    
            </Row>
        </Container>
        : <p>No hay productos en el carrito</p>
    )
}

export default CheckOut