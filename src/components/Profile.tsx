import React from 'react';
import s from './Profile.module.css';



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
            <div>
                my posts
                <div>new post</div>
                <div className={'posts'}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={`${s.item} ${s.second}`}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;