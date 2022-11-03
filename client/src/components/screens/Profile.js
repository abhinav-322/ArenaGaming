import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'

const Profile = ()=> {
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
     },[])
    return (
        <div>
            <div 
                style={{display:"flex", justifyContent:"space-around", margin:"18px 0px"}}>
                <div>
                <img style={{width: "160px", height: "160px", borderRadius:"80px"}} 
                    src={state?state.pic:"ara ara"}
                />
                </div>
                <div> 
                    <h4> {state?state.name:"ara ara"} </h4>
                    <h5> {state?state.email:"ara ara"} </h5>
                    <div 
                        style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <h5> {mypics.length} posts </h5>
                        <h5> {state?state.followers.length:"0"} followers </h5>
                        <h5> {state?state.following.length:"0"} following </h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    mypics.map(item=>{
                        return (
                            <img  key={item._id} className='item homeImage' src={item.photo} alt={item.title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile