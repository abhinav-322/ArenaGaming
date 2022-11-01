import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import { useParams } from 'react-router-dom'
const Profile = ()=> {
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    const {userid} = useParams()
    // console.log(userid);
    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
          
             setProfile(result)
        })
     },[])
    return (
        <>
        {
            userProfile 
            ?

            <div>
                <div 
                    style={{display:"flex", justifyContent:"space-around", margin:"18px 0px"}}>
                    <div>
                    <img style={{width: "160px", height: "160px", borderRadius:"80px"}} 
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    </div>
                    <div> 
                        <h4> {userProfile.user.name} </h4>
                        <h4> {userProfile.user.email} </h4>
                        <div 
                            style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                            <h5> {userProfile.posts.length} posts </h5>
                            <h5> 101 followers </h5>
                            <h5> 101 following </h5>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    {
                        userProfile.posts.map(item=>{
                            return (
                                <img  key={item._id} className='item homeImage' src={item.photo} alt={item.title}/>
                            )
                        })
                    }
                </div>
            </div>
            :
            <h2>Loding...</h2>
        }

        </>
    )
}

export default Profile