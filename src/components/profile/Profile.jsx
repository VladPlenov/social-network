import React from "react";
import './profile.css'
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";




function Profile(props){
    // console.log('profilePage postsData:', props); // Проверка пропсов
    return(
        <div className='profile'>
            <ProfileInfo />
            <Posts postsData={props.postsData} />
        </div>
    )
}

export default Profile