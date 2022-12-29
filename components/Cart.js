import React from 'react'
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import { useStateContext } from '../lib/context'
import { 
  CartWrapper, 
  CartStyle,
  Card,
  Cards, 
  CardInfo , 
  EmptyStyle,
  Checkout
  } from '../styles/cartStyles'
  import { Quantity } from '../styles/productDetail'
  import {FaShoppingCart} from "react-icons/fa";
  import getStripe from "../lib/getStripe";


  //animation Variants
  const card = {
    hidden: {opacity: 0, scale: 0.8},
    show:{opacity: 1, scale: 1}
  }

  const cards = {
    hidden: { opacity: 1 },
    show : {
      opacity: 1,
      transition : { 
        delayChildren: 0.4,
        staggerChildren: 0.1, 
      }
    }
  }

  //payment
 const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify (cartItems)
    });
    const data = await response.json;
    await stripe.redirectToCheckout({ sessionId : data.id})
  }
  
const Cart = () => { 
  const{ cartItems, setShowCart, onAdd, onRemove, totalPrice} = useStateContext()
  return (
    <CartWrapper 
      animate = {{ opacity: 1 }} 
      initial = {{ opatity: 0 }}
      exit = {{ opatity: 0 }}
      onClick = {() => setShowCart(false)}>
      <CartStyle 
        animate = {{ x: "0%" }} 
        initial = {{ x:"50%" }}
        exit = {{ x:"100%" }}
        transition = {{ type:"tween" }}
        onClick={(e) => e.stopPropagation()}
        >
        {cartItems.length < 1 && (
            <EmptyStyle
              initial ={{ opacity: 0, scale: 0.8 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition = {{ delay: 0.2 }}
            >  
                <h1>You have more shopping to do</h1>
                <FaShoppingCart/>
            </EmptyStyle>
        )}
        <Cards
         variants={cards} 
         initial = "hidden"       
         animate = "show"
         layout        
         >
          {cartItems.length >= 1 &&(
            cartItems.map((items) =>{
              return(
                <Card
                  variants={card}        
                  key={items.slug}
                  layout
                >
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
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: {totalPrice}€</h3>
              <button onClick={handleCheckout}> Purchase </button>
          </Checkout>
        )}
     </CartStyle>    
    </CartWrapper>
  )
}

export default Cart