import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://www.vespa.com/mediaObject/vespa/travel/travel-nha-trang/02-Opening-Image/Opening-Image/original/Opening-Image.jpg"
                    alt="sea"/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;