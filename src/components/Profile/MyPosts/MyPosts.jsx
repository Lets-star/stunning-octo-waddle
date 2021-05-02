import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={s.posts}>
           <div className={s.myPosts}> <h3>My Posts</h3></div>
            <div className={s.newPost}>
                <div><textarea value='Write smth..'></textarea></div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <Post message='Hi' likecounter='70'/>
            <Post message='Bienvenido en mi sait' likecounter='60'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};
export default MyPosts;
