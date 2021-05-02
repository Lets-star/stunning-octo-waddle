import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg"></img>
            </div>
            <div className ={s.descriptionBlock}>ava+discr</div>
        </div>
    );
};
export default ProfileInfo;
