import React from 'react'
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import { useStateContext } from '../lib/context'
import { 
  CartWrapper, 
  CartStyle,
  Card, 
  CardInfo , 
  EmptyStyle,
  Checkout
  } from '../styles/cartStyles'
  import { Quantity } from '../styles/productDetail'
  import {FaShoppingCart} from "react-icons/fa";

const Cart = () => {
  
  const{ cartItems, setShowCart, onAdd, onRemove, totalPrice} = useStateContext()
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
                   <AiFillMinusCircle onClick= {() => onRemove(items)}/>
                 </button>
                 <p>{items.quantity}</p>
                 <button>
                  <AiFillPlusCircle onClick= {() => onAdd(items, 1)} />
                 </button>
                </Quantity>
              </CardInfo>
            </Card> 
            )
          })
        )}
        {cartItems.length >= 1 && (
          <div>
            <h3>Subtotal: {totalPrice}€</h3>
            <Checkout>Purchase</Checkout>
          </div>
        )

        }
     </CartStyle>    
    </CartWrapper>
  )
}

export default Cart