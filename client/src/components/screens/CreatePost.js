import React from 'react'
import "../../App.css"

const CreatePost = () =>{
    return(
        <div className='card input-field'>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
            <div className='file-field inpur-field'>
                <div className='btn'>
                    <span>Upload Image</span>
                    <input type={"file"} />
                </div>
                <div className='file-path-wrapper'>
                    <input className='file-path validate' type="text" />
                </div>
            </div>
            <button className='btn'> Submit Post</button>
        </div>
    )
}

export default CreatePost