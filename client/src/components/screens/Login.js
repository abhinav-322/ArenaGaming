import React from 'react'
import { Link } from 'react-router-dom'
const Login = ()=> {
    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text"
                placeholder='email'
            />
            <input 
                type="password"
                placeholder='password'
            />
            <button> Login </button>
            <h5>
                Don't have account 
                    <Link to={"/signup"}> Signup</Link> 
            </h5>
        </div>
    )
}

export default Login