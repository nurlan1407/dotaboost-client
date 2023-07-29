import React, { FC } from 'react'
import cls from './navbar.module.scss'
import Logo from 'shared/ui/logo/logo';
import Link from 'shared/ui/link/link'
import { useOnHoverOutside } from 'shared/hooks/useOnHoverOutside';



const Navbar: FC = ({  }) => {
  const dropdownRef = React.useRef(null); // Create a reference for dropdown container
  const [showDropdown, setShowDropdown] = React.useState(false)
  const closeHoverMenu = () => {
    setShowDropdown(false)
  };
  useOnHoverOutside(dropdownRef,closeHoverMenu)
  return (
    <div className={cls.navbarContainer}>
      <nav className={cls.navbar}>
        <Logo/>
          <ul className={cls.navbarOptions}>
            <li>
              <Link href=''>Home</Link>
            </li>
            <li className={cls.dropdownToggle}>
              <Link href='' >Buy Boost &nbsp;<i className='fa fa-sort-desc'></i></Link>
                <ul className={`${cls.dropdownMenu}`}>
                <li className={cls.dropdownItem}><Link href="#">MMR BOOST</Link></li>
                <li className={cls.dropdownItem}><Link href="#">Low Priority</Link></li>
                <li className={cls.dropdownItem}><Link href="#">Calibration</Link></li>
                <li className={cls.dropdownItem}><Link href="#">Beaviour Score</Link></li>
              </ul>       
            </li>
            <li>
              <Link href=''>Boosters</Link>
            </li>
            <li>
              <Link href=''>FAQ</Link>
            </li>
            <li>
              <Link href=''>Blog</Link>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar;