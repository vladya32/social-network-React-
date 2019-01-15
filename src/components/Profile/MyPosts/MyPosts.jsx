import React from 'react';
import s from './MyPosts.module.css';   
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.allPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message="Hello" likesCount="0" />
                </div>
            </div>
        </div>
    )
}

export default MyPosts;
