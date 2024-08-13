import React from 'react'
import Post from './post/Post'

let postsItems = [
    {message: 'Hi, world', id: 1},
    {message: 'I`m Elon Mask, really', id: 2},
    {message: 'Give me some bitcoins', id: 3}
]

function Posts(){
    return(
        <div className='posts'>
            <h2>My posts</h2>
            <input placeholder='enter the post' />
            <button>Add post</button>
            {postsItems.map((e)=><Post message={e.message} id={e.id} />)}
            {/* <Post message='Hi, world'/> */}
            {/* <Post message='I`m Elon Mask, really'/> */}
            {/* <Post message='Give me some bitcoins'/> */}

        </div>
    )
}

export default Posts
