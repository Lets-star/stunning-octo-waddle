import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg"></img>
      </div>
      <div>ava+discr</div>
       <MyPosts/>
    </div>
  );
};
export default Profile;
