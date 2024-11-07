import { createContext, useState } from "react";

export const CartContext = createContext(false)

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        let itemCopy = item
        itemCopy.quantity = quantity
        if(isInCart(item)){
            const newCart = updateProduct(item, quantity)
            setCart([...newCart])
        }
        else{
            setCart([...cart, item])
        }
        /** 
        if(isInCart(item)){
            itemCopy.quantity = 20
            setCart([...cart, {[itemCopy.id]: itemCopy}])
        }
        else{
            setCart([...cart, {[itemCopy.id]: itemCopy}])
        }
            **/

    }

    const updateProduct = (item, quantity) => {
        return cart.map( product => {
            let newObj = {...product}
            let newQuantity = 0
            if(product.id === item.id){
                newQuantity = product.quantity + quantity
                newObj = {...product, quantity:newQuantity}
            }

            return newObj
        })
    }

    const deleteItem = (id) => {
        const newItems =  cart.filter( product => product.id !== id )
        console.log(newItems)
        setCart([...newItems])
    }
    
    
    const isInCart = (itemCart) => {
        if(cart.length > 0) return cart.some(item => item.id === itemCart.id)
        else return false
    }

    return(
    <CartContext.Provider value={[cart, setCart, addItem, deleteItem]}>
        {children}
    </CartContext.Provider>)
}