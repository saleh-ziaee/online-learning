import React from 'react';
import ProfileCourseSection1 from "@/component/ProfileCourse/ProfileCourseSection1.jsx";
import videoOne from "@/assets/videos/15-working-with-props.mp4"

function ProfileCourseUi({title,description,videoSrc}) {
    return (
        <div className={" "}>
            <div className={"flex flex-col basis-1/2"}>
                <div className={"flex flex-row items-center gap-x-2"}>
                    <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                    <span className={"font-bold"}>{title}</span>
                </div>
                <div>
                    {/*<img className={"mt-10"} src={Trailer} alt=""/>*/}
                    <video className={'w-full'} controls="controls">
                        <source type="video/mp4" src={videoSrc}/>
                    </video>
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