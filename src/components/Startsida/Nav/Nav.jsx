import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return (
        <div className={s.navContainer}>
        <NavLink to="/Tävla"> Tävla </NavLink>
         <a href="/Gallery"> Gallery </a>
        </div>
    )
}

export default Nav;