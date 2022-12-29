import Link from 'next/link'
import {FiShoppingBag} from 'react-icons/fi'
import { Navstyles, NavItems } from '../styles/navStyles'
import { useStateContext } from "../lib/context"
import Cart from "../components/Cart"

const { AnimatePresence, motion } = require ("framer-motion") 

export default function Nav() {

  const{showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <Navstyles>
      <Link href={'/'}>Home</Link>
      <NavItems>
      <div onClick={() => setShowCart(true)}>
        {totalQuantities > 0 && (
          <motion.span animate ={{ scale: 1 }} initial ={{ scale: 0 }}>
            {totalQuantities}
          </motion.span >
          )}
        <div>
         <FiShoppingBag />
        </div>
      </div>
      </NavItems>           
        <AnimatePresence> {showCart && <Cart />}</AnimatePresence>
      </Navstyles>
  )
}

