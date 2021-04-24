import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={s.posts}>
            <div>
                <textarea></textarea>
                <button>New Post</button>
            </div>
            <Post message = 'Hi' likecounter = '70'/>
            <Post message = 'Bienvenido en mi sait' likecounter = '60'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};
export default MyPosts;
