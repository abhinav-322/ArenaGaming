import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ()=> {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = ()=> {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return alert("Enter valid Email"); 
        }
        fetch("/signup", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error) {
                alert(data.error)
            }
            else {
                navigate("/signin")
            }
        }).catch(err=> {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Signup</h1>
            <input 
                type="text"
                placeholder='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={()=>PostData()} className="btn" > Signup </button>
            <h5>
                Already have an account 
                    <Link to={"/signin"}> Signin</Link> 
            </h5>
        </div>
    )
}

export default Signup