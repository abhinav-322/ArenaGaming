import React from 'react'
import { Link } from 'react-router-dom'

const Signup = ()=> {
    return (
        <div>
            <h1>Signup</h1>
            <input 
                type="text"
                placeholder='name'
            />
            <input 
                type="text"
                placeholder='email'
            />
            <input 
                type="password"
                placeholder='password'
            />
            <button> Signup </button>
            <h5>
                Already have an account 
                    <Link to={"/signin"}> Signin</Link> 
            </h5>
        </div>
    )
}

export default Signup