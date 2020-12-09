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
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;