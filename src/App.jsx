import NavbarEcommerce from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react'
import ItemListContainer from './components/ItemListContainer'




function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=10")
    .then((response) => setData(response.json()))
    .catch(console.table)
    
  }, [])
  return (
    <>
    <NavbarEcommerce data={data}/>
    <Container className='mt-5'>
      <Row>
        <Col sm={4} xs={4} md={4} lg={4}>
        <ItemListContainer title={'Producto'} greeting={'Welcome'}/>
        </Col>
        <Col sm={4} xs={4} md={4} lg={4}>
        <ItemListContainer title={'Producto'} greeting={'Welcome'}/>
        </Col>
        <Col sm={4} xs={4} md={4} lg={4}>
        <ItemListContainer title={'Producto'} greeting={'Welcome'}/>
        </Col>
      </Row>
    </Container>
    </>
      )
}

export default App
