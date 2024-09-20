import {ShoppingCartOutlined} from '@ant-design/icons'

const CartWidget = ({cantidad=0}) => {
    return(
        <div style={{display:'inline-block'}}>
          <ShoppingCartOutlined />
          <span style={{fontSize:'12px'}}>{cantidad}</span>
        </div>
    )
} 

export default CartWidget