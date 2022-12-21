import Link from 'next/link'
import {FiShoppingBag} from 'react-icons/fi'
import { Navstyles, NavItems } from '../styles/navStyles'
import { useStateContext } from "../lib/context"
import Cart from "../components/Cart"

export default function Nav() {

  const{showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <Navstyles>
      <Link href={'/'}>Home</Link>
      <NavItems>
      <div onClick={() => setShowCart(true)}>
        {totalQuantities > 0 && <span>{totalQuantities}</span>}
        <div>
         <FiShoppingBag />
        </div>
      </div>
      </NavItems> 
      {showCart && <Cart />}     
    </Navstyles>
  )
}

