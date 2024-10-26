import { createContext, useState } from "react";

export const CartContext = createContext(false)

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (itemCart) => {
        if(cart.length > 0) return cart.some(item => item.item.id === itemCart.id)
        else return false
    }

    return(
    <CartContext.Provider value={[cart, setCart, addItem]}>
        {children}
    </CartContext.Provider>)
}