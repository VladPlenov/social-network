import React from "react";
import './profile.css'
<<<<<<< HEAD
import './posts/Posts'
import ava from '../../img/avatar.png'
import ava_min from '../../img/avatar_min.png'
import Posts from "./posts/Posts";
=======
import ava from '../../img/avatar.png'
import ava_min from '../../img/avatar_min.png'
>>>>>>> origin/main


function Profile(){
    return(
        <div className='profile'>
            <div className='me'>
                <img src={ava} alt="profile mini photo" />
                <p>Им Фамильев</p>
            </div>
<<<<<<< HEAD
            <Posts />
=======
            <div className='posts'>
                <input placeholder='enter the post' />
                <button>Add post</button>
                <div className='post'>
                    <img src={ava_min} alt="profile mini photo" />
                    <span>Им Фамильев</span>
                    <p>
                       какой-то текст
                    </p>
                </div>
            </div>
>>>>>>> origin/main
        </div>
    )
}

export default Profile