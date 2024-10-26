import { Container, Row, Col, Spinner } from "react-bootstrap"

const OnLoad = () => {
    return(
        <Container className="mt-5">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    )
}

export default OnLoad