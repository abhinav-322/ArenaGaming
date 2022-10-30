import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const NavBar = () => {
    return (
        <nav>
            <div className='topnav'>
                <Link to='/'>Arena</Link>
                {/* <ul> */}
                    {/* <li> */}
                    <Link to='/signin'>Login</Link>
                    {/* </li>
                    <li> */}
                    <Link to='/signup'>Signup</Link>
                    {/* </li>
                    <li> */}
                    <Link to='/profile'>Profile</Link>
                    {/* </li> */}
                {/* </ul> */}
            </div>
        </nav>
    )
}
export default NavBar