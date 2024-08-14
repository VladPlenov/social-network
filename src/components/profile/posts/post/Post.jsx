import React from 'react'
import ava_min from '../../../../img/avatar_min.png'



function Post(props){
    return(
        <div className='post'>
            <img src={ava_min}alt='profile mini photo' />
            <span>Им Фамильев</span>
            <p>{props.message}</p>
            <span>{props.likes}</span> likes
        </div>
    )
}


export default Post
