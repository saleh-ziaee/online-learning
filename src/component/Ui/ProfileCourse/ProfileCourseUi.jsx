import React from 'react';
import Trailer from "../../../assets/images/CourseDetail/Trailer.png"
import ProfileCourseSection1 from "@/component/ProfileCourse/ProfileCourseSection1.jsx";

function ProfileCourseUi({title,description,video,props}) {
    return (
        <div className={"flex flex-row p-12"}>
            <div className={"flex flex-col basis-1/2"}>
                <div className={"flex flex-row items-center gap-x-2"}>
                    <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                    <span className={"font-bold"}>{title}</span>
                </div>
                <div>
                    <img className={"mt-10"} src={Trailer} alt=""/>
                </div>
                <div className={"text-right text-gray-500 mt-10"}>
                    {description}
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}

export default ProfileCourseUi;