import React, { FC } from 'react'
import cls from './navbar.module.scss'
import Logo from 'shared/ui/logo/logo';
import Link from 'shared/ui/link/link'
import { useOnHoverOutside } from 'shared/hooks/useOnHoverOutside';
import {useDispatch} from "react-redux";
import {showAuthModal} from "app/providers/store/reducers/htmlStates";
import {useAppSelector} from "app/providers/store/store";



interface NavbarProps{
  className?:string,
  onOpen:()=>void
}
const   Navbar: FC<NavbarProps> = ({onOpen }) => {
  const dispatch = useDispatch()
  const user = useAppSelector(state=>state.userReducer.user)
  const dropdownRef = React.useRef(null); // Create a reference for dropdown container
  const [showDropdown, setShowDropdown] = React.useState(false)
  const closeHoverMenu = () => {
    setShowDropdown(false)
  };
  useOnHoverOutside(dropdownRef,closeHoverMenu);
  return (
    <div className={cls.navbarContainer}>
      <div className='wrapper'>
          <nav className={cls.navbar}>
        <Logo/>
          <ul className={cls.navbarOptions}>
            <li className={cls.navbarOption}>
              <Link  href=''> <i className='fa fa-user-circle'></i>&nbsp;&nbsp;Home</Link>
            </li>
            <li className={`${cls.dropdownToggle}  ${cls.navbarOption}` } >
                <Link href='' style={{padding:"0"}}>Buy Boost&nbsp;<i className='fa fa-sort-desc'></i></Link>
                <ul className={`${cls.dropdownMenu}`}>
                  <li className={cls.dropdownItem}><Link href="#">MMR BOOST</Link></li>
                  <li className={cls.dropdownItem}><Link href="#">Low Priority</Link></li>
                  <li className={cls.dropdownItem}><Link href="#">Calibration</Link></li>
                  <li className={cls.dropdownItem}><Link href="#">Beaviour Score</Link></li>
                </ul>       
            </li>
            <li className={cls.navbarOption}>
              <Link href=''> <i className='fa fa-user-circle'></i>&nbsp;&nbsp;Boosters</Link>
            </li>
            <li className={cls.navbarOption}  onClick={()=>{dispatch(showAuthModal(true))}}>
              <Link href='#'><i className='fa fa-user-circle'></i>&nbsp;&nbsp;{user?user.email:"Login"}</Link>
            </li>
          </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar;