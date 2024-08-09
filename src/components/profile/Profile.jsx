import React from "react";
import './profile.css'
import './posts/Posts'
import ava from '../../img/avatar.png'
import Posts from "./posts/Posts";


function Profile(){
    return(
        <div className='profile'>
            <div className='me'>
                <img src={ava} alt="profile mini photo" />
                <p>Им Фамильев</p>
            </div>
            <Posts />
        </div>
    )
}

export default Profile