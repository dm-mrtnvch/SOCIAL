import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: string
}

function Post(props: PostType) {
// debugger
    return (
        <div className={s.item}>
            <img src="https://p1.hiclipart.com/preview/422/614/340/facebook-icons-cat-user-profile-avatar-cartoon-small-to-mediumsized-cats-whiskers-snout-png-clipart.jpg" alt="cat"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;