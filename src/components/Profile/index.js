import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './MyPosts';

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg"
                    alt=""
                />
            </div>

            <div className={style.text__wrap}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                consequatur?
                <p className={style.text__p}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore molestiae doloribus aspernatur, odio quisquam quis
                    accusantium eveniet rerum, dolor nihil illo repudiandae
                    veniam, voluptatum officia totam similique delectus dolores!
                    Ut nam vel laborum, optio fugit similique omnis eius earum,
                    deleniti rerum facilis suscipit sint dolor, voluptas facere
                    consectetur rem explicabo itaque voluptatibus corrupti
                    dolore. Beatae deserunt fugiat sapiente inventore
                    reiciendis! Voluptatem nihil reprehenderit sequi libero
                    magnam. Non atque architecto quaerat eaque at rerum
                    repudiandae impedit cupiditate tenetur earum, quasi
                    similique maxime pariatur in? Ullam aliquam cum asperiores
                    qui alias repellendus facere voluptates fugit. Sequi
                    laboriosam exercitationem quidem earum ullam? Laborum!
                </p>
            </div>
            <MyPosts />
        </div>
    );
};
