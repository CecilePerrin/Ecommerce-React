import React from 'react'
import { useStateContext } from '../lib/context'
import { CartWrapper, CartStyle } from '../styles/cartStyles'

const Cart = () => {
  
  const{ cartItems} = useStateContext()
  console.log(cartItems)
  return (
    <CartWrapper>
      <CartStyle>
            <div>
                <h1>You have more shopping to do</h1>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Title</h3>
                <h3>Price</h3> 
              </div>
            </div> 
     </CartStyle>    
    </CartWrapper>
  )
}

export default Cart