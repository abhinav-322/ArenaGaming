import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import "../App.css"

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext);
    const renderList = ()=> {
        if(state) {
            return [
                <div>
                <Link to='/profile'>Profile</Link>
                <Link to='/create'>Create Post</Link>
                </div>
            ]
        } else {
            return [
                <div>
                    <Link to='/signin'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            ]
        }
    }
    return (
        <nav>
            <div className='topnav'>
                <Link to={state?'/':"/signin"}>Arena</Link>
                {renderList()}
            </div>
        </nav>
    )
}
export default NavBar