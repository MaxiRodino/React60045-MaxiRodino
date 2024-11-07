import { useState } from "react";
import { sendOrders } from "../firebase/firebase";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const AddOrder = () => {
    const [orderId, setOrderId] = useState(0)
    const [cart, setCart, ] = useContext(CartContext)
    let total = 0
    const handleClick = () => {
        const newOrder = {
            buyer: {
                email:'edu@gmail.com',
                mame:'eduardo',
                phone: '+5493512312312'
            },
            date: new Date(),
            items: 
                cart.map( element => {
                    total += element.price
                    return(
                        {
                            id:element.id,
                            title:element.title,
                            price:element.price,
                            quantity:element.quantity
                        }
                    )
                })
            ,
            total: total
        }
        sendOrders(newOrder).then(result => {
            setOrderId(result)
            setCart([])
        })
        console.log(orderId)
    }
    return(
        <>
        <button onClick={handleClick}>Enviar nueva orden de pedido</button>
        </>
    )
}

export default AddOrder