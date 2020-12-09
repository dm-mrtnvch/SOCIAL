import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts() {

    return (
        <div>
            my posts
            <div>
                <textarea name="" id="" cols={20} rows={2}></textarea>
                <button>add post</button>
            </div>
            <div className={'posts'}>
                <Post message={'how are you '} likesCount={'15'}/>
                <Post message={`it's my first post `} likesCount={'10'}/>
            </div>
        </div>
    )
}

export default MyPosts;