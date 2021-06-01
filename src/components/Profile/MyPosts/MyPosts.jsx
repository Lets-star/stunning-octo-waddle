import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    };

    let postsElements =
        props.posts.map(p => <Post message={p.post} likecounter={p.likescount}/>);
    debugger
    return (
        <div className={s.posts}>
            <div className={s.myPosts}><h3>My Posts</h3></div>
            <div className={s.newPost}>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>New Post</button>
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
