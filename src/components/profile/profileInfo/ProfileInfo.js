import React from "react";
import ava from '../../../img/avatar.png'

const ProfileInfo = (props) =>{
    return(
        <div className='me'>
            <img src={ava} alt="profile mini photo" />
            <p>Им Фамильев</p>
        </div>
    )
}

export default ProfileInfo