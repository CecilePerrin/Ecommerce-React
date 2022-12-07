import Link from 'next/link'
import {FiShoppingBag} from 'react-icons/fi'
import { Navstyles, NavItems } from '../styles/navStyles'
import { useStateContext } from "../lib/context"
import Cart from "../components/Cart"

export default function Nav() {

  const{showCart, setShowCart} = useStateContext();

  return (
    <Navstyles>
      <Link href={'/'}>Home</Link>
      <NavItems>
      <div onClick={() => setShowCart(true)}>
        <div>
         <FiShoppingBag />
        </div>
      </div>
      </NavItems> 
      {showCart && <Cart />}     
    </Navstyles>
  )
}

