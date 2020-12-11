import React from 'react';
import s from './ProfileInfo.module.css';




function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://www.vespa.com/mediaObject/vespa/travel/travel-nha-trang/02-Opening-Image/Opening-Image/original/Opening-Image.jpg"
                    alt="sea"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>

        </div>
    )
}

export default ProfileInfo;