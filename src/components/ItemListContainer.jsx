import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap"
import { GetCategories, GetCategory } from "../asyncMock"
import {Container, Col, Row} from "react-bootstrap"
import { useLocation, Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function slugify(input) {
    if (!input)
        return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();

    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}

const CardListCategory = ({element}) => {
    return(
        <Card>
            <Card.Img variant="top" src={element.picture}/>
            <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>{element.title}</Card.Text>
                    <Button as={Link} to={`http://localhost:5173/categorie/${slugify(element.name) +"-"+ element.id}`}>Ver</Button>
            </Card.Body>
        </Card>
    )
}

//https://api.mercadolibre.com/items/MLA1376762375
const CardListElement = ({element}) => {
    return(
        <Card>
            <Card.Img variant="top" src={element.thumbnail}/>
            <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>{element.title}</Card.Text>
                    <Button as={Link} to={`/item/${element.id}`}>Ver</Button>
            </Card.Body>
        </Card>
    )
}

const ItemListContainer = ({category = true}) => {
    const location = useLocation()
    const [data, setData] = useState([])
    const params = useParams()
 
    const categories = async () => {
       
        if(Object.keys(params).length === 0 ){
            const result = await GetCategories
            setData(result)
        }
        else{
            const {category} = params
            const result = await GetCategory(category)
            setData(result.results)
            //console.log(result)
        }
    }
    useEffect(() => {   
        categories()
    }, [ params])

    return(
        <Container>
            <Row className="mt-5">
                    {data?.map((element) => {
                        return element.picture 
                                    ? <Col xs={4}  key={element.id}>
                                        <article>    
                                            <CardListCategory element={element} />
                                        </article>
                                    </Col>
                                    :
                                    <Col xs={4}  key={element.id}>
                                        <article>    
                                            <CardListElement element={element} />
                                        </article>
                                    </Col>
                        }
                    )}
            </Row>
        </Container>      
    )
}

export default ItemListContainer