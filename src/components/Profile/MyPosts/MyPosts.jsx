import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {


        let postData = [{ id:1, post:'Hi', likescount:15},
                        { id:2, post:'Bienvenido en mi cait', likescount:60}
        ]


    return (
        <div className={s.posts}>
           <div className={s.myPosts}> <h3>My Posts</h3></div>
            <div className={s.newPost}>
                <div><textarea value='Write smth..'></textarea></div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <Post message={postData[0].post} likecounter={postData[0].likescount}/>
            <Post message={postData[1].post} likecounter={postData[1].likescount}/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};
export default MyPosts;
