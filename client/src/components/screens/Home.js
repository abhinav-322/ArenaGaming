import React from 'react'
import "../../App.css"
import {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../App'

const Home = ()=> {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
       fetch('/allpost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setData(result.posts)
       })
    },[])

    return (
        <div className='home'>
            {
                data.map(item=>{
                    return(
                        <div className='card home-card' key={item._id}>
                            <h5>{item.postedBy.name}</h5> 
                            <div>
                                <img src={item.photo} />
                            </div>
                            <div>
                                <i class="material-icons" style={{color:"red"}}>favorite </i>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <input 
                                    type="text"
                                    placeholder='add comment'
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home