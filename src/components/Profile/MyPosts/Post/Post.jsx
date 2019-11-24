import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (
        <div className={style.Post_container}>
            <div className={style.Post_img}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYMZ0k2xA2x_R6Y69BpQOcmOATXOKnqtddjpEccrfdSAmdUP6&s"
                    alt=""
                />
            </div>

            <div className={style.Post_user}>
                <div className={style.Post_user_name}>Name: Max</div>
                <p className={style.Post_user_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, excepturi?
                </p>
            </div>
        </div>
    );
};

export default Post;
