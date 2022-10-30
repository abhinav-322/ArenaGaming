import React from 'react'
import { useState, useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UserContext } from '../../App'

const Signin = ()=> {
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = ()=> {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return alert("Enter valid Email"); 
        }
        fetch("/signin", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.error) {
                alert(data.error)
            }
            else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                alert("Signedin Successfully")
                navigate("/")
            }
        }).catch(err=> {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Login</h1>
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
            <button className='btn' onClick={()=>PostData()} > Login </button>
            <h5>
                Don't have account 
                    <Link to={"/signup"}> Signup</Link> 
            </h5>
        </div>
    )
}

export default Signin