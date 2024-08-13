import React from "react";
import './profile.css'
import './posts/Posts'
import ava from '../../img/avatar.png'
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";


function Profile(){
    return(
        <div className='profile'>
            <ProfileInfo />
            <Posts />
        </div>
    )
}

export default Profile