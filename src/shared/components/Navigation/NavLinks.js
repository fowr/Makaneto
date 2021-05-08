import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavLinks.scss"

const NavLinks=props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>جدیدترین مناظر</NavLink>
        </li>
        <li>
            <NavLink to="/users">کاربران</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ایجاد پست</NavLink>
        </li>
        <li>
            <NavLink to="/auth">درباره ما</NavLink>
        </li>


    </ul>
}

export default NavLinks