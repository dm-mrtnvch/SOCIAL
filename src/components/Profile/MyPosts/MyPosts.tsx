import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MyPostsPropsType = {
    posts: Array<PostsDataPropsType>
}

export type PostsDataPropsType = {
    id: number
    message: string
    likesCount: number
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement: any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea>
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