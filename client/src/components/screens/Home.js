import React from 'react'
import "../../App.css"
const Home = ()=> {
    return (
        <div className='home'>
            <div className='card home-card'>
                <h5>Aniket</h5> 
                <div>
                    <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                </div>
                <div>
                    <i class="material-icons" style={{color:"red"}}>favorite </i>
                    <h5>title</h5>
                    <p>this is amazing post</p>
                    <input 
                        type="text"
                        placeholder='add comment'
                    />
                </div>
            </div>

        </div>
    )
}

export default Home