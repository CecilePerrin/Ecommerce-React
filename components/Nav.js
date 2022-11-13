import Link from 'next/link'
import {FiShoppingBag} from 'react-icons/fi'
import { Navstyles } from '../styles/navStyles'

export default function Nav() {
  return (
    <Navstyles>
      <Link href={'/'}>Home</Link>
      <div>
        <div>
         <FiShoppingBag />
        </div>
      </div>

    </Navstyles>
  )
}

