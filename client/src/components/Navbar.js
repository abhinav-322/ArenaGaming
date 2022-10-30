import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const NavBar = () => {
    return (
        <nav>
            <div className='topnav'>
                <Link to='/'>Arena</Link>
                    <Link to='/signin'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/profile'>Profile</Link>
            </div>
        </nav>
    )
}
export default NavBar