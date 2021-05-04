import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.post} likecounter={p.likescount}/>)
    return (
        <div className={s.posts}>
            <div className={s.myPosts}><h3>My Posts</h3></div>
            <div className={s.newPost}>
                <div><textarea value='Write smth..'></textarea></div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            {postsElements}
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};
export default MyPosts;
