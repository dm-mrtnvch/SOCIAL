import React from 'react';
import s from './Post.module.css';


function Post() {
    return (
        <div className={s.item}>
            <img src="https://p1.hiclipart.com/preview/422/614/340/facebook-icons-cat-user-profile-avatar-cartoon-small-to-mediumsized-cats-whiskers-snout-png-clipart.jpg" alt="cat"/>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;