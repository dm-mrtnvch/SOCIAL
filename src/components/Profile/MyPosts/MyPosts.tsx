import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

export type MyPostsPropsType = {
    posts: Array<PostsDataPropsType>
    addPost: (postText: string) => void
    post: Array<PostType>
}

export type PostsDataPropsType = {
    id: number
    message: string
    likesCount: number
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
        }
    }


    return (
        <div className={s.postsBlock}>
            {props.addPost}
            <hr/>
                {props.post.map( p => <div key={p.id}><b>{`сюда должно добавлять сообщение ${props.addPost}`}</b></div>)}
            <hr/>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef }></textarea>
                </div>
                <div>
                    <button onClick={addPost}> add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;