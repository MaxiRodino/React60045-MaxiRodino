import { useParams } from "react-router-dom"

const Catalogo = () => {
    const {category} = useParams()
    
    return(
        <>
        <h1>{category}</h1>
        </>
    )
}

export default Catalogo