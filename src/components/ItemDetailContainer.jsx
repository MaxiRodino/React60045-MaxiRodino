import { GetProduct } from "../asyncMock"
import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Button, Container, Col, Row } from "react-bootstrap"
import OnLoad from "./OnLoad"
import AddOrder from "./AddOrder"
import { CartContext } from "../context/CartContext"

const ItemDetailContainer = () => {
    const [element, setElement] = useState()
    const [countCart, setCountCart] = useState(1)
    const {id} = useParams()
    const navigate = useNavigate()
    const [,,addItem] = useContext(CartContext)

    useEffect(() => {
        const get = async () => {
            const result = await GetProduct(id)
            setElement(result)
        }
        get()
        
    }, [])

    const handleClickIncrement = (e) =>{
        if(countCart < 100)
        setCountCart(countCart + 1)
    }

    const handleClickDecrement = (e) =>{
        if(countCart > 1)
        setCountCart(countCart - 1)
    }

    const handleClick = (product) => {
        addItem(product, countCart)
    }

    return (
        element ?
        <Container>
            <Row className="mt-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={element.pictures[0].url} className="img-fluid"/>
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text>${element.price}</Card.Text>
                            <Card.Text>{element.condition}</Card.Text>
                            <Card.Text>{element.warranty}</Card.Text>
                            <div className="d-flex  align-items-center">
                                <button onClick={handleClickDecrement}>-</button>
                                    <span>{countCart}</span>
                                <button onClick={handleClickIncrement}>+</button>
                                <Button onClick={() => handleClick(element)}>Agregar al carrito</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    <Button className="mt-5" onClick={() => navigate(-1)}>Volver</Button>
                </Col>
            </Row>
        </Container>
        : 
        <OnLoad />
    )
}

export default ItemDetailContainer