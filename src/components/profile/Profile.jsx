import React from "react";
import './profile.css'
import ava from '../../img/avatar.png'
import ava_min from '../../img/avatar_min.png'


function Profile(){
    return(
        <div className='profile'>
            <div className='me'>
                <img src={ava} alt="profile mini photo" />
                <p>Им Фамильев</p>
            </div>
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
        </div>
    )
}

export default Profile