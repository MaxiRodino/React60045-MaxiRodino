import {ShoppingCartOutlined} from '@ant-design/icons'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = ({cantidad=0}) => {
  const [cart,,] = useContext(CartContext)

  console.log(cart)

  return(
        <div style={{display:'inline-block'}}>
          <ShoppingCartOutlined />
          <span style={{fontSize:'12px'}}>{cart.length}</span>
        </div>
    )
} 

export default CartWidget