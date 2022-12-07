import React from 'react'
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import { useStateContext } from '../lib/context'
import { 
  CartWrapper, 
  CartStyle,
  Card, 
  CardInfo , 
  EmptyStyle,
  Quantity} from '../styles/cartStyles'
  import {FaShoppingCart} from "react-icons/fa";

const Cart = () => {
  
  const{ cartItems, setShowCart} = useStateContext()
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
            <EmptyStyle>
                <h1>You have more shopping to do</h1>
                <FaShoppingCart/>
            </EmptyStyle>
        )}
        {cartItems.length >= 1 &&(
          cartItems.map((items) =>{
            return(
            <Card>
              <img src={items.image.data.attributes.formats.thumbnail.url} alt={items.titre} />
              <CardInfo>
                <h3>{items.titre}</h3>
                <h3>{items.price}</h3> 
                <Quantity>
                 <span>Quantités</span>
                 <button>
                   <AiFillMinusCircle />
                 </button>
                 <p>{items.quantity}</p>
                 <button>
                  <AiFillPlusCircle />
                 </button>
                </Quantity>
              </CardInfo>
            </Card> 
            )
          })
        )}
     </CartStyle>    
    </CartWrapper>
  )
}

export default Cart