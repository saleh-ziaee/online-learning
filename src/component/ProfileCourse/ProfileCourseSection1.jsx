import React from 'react';
import {profilecourse} from "@/fake-array/profilecourse.js";
import ProfileCourseUi from "@/component/Ui/ProfileCourse/ProfileCourseUi.jsx";

function ProfileCourseSection1(props) {
    return (
        <div>
            {
                profilecourse.map((detail)=>(
                    <ProfileCourseUi
                    key={detail.id}
                    title={detail.title}
                    video={detail.video}
                    description={detail.description}
                    />
                ))
            }
        </div>
    );
}

export default ProfileCourseSection1;