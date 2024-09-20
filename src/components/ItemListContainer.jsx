import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap"

const ItemListContainer = ({title, greeting}) => {
    return(
        <article>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {greeting}
                    </Card.Text>
                    <Button>Agregar</Button>
                </Card.Body>
            </Card>  
        </article>      
    )
}

export default ItemListContainer