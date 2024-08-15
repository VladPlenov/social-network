import React from 'react'
import Post from './post/Post'


function Posts(props){
  
    return(
        <div className='posts'>
            <h2>My posts</h2>
            <input placeholder='enter the post' />
            <button>Add post</button>
            {props.postsData.map((e)=><Post key={e.id} message={e.message} id={e.id} likes={e.likes} />)}
        </div>
    )
}

export default Posts
