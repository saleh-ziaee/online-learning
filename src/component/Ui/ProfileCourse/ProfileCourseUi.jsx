import React from 'react';
import VideoPlayer from "@/component/video/VideoPlayer.jsx";

function ProfileCourseUi({title, description, videoSrc}) {
    return (
        <div className={""}>
            <div className={"flex flex-col gap-4"}>

                <div className={"flex flex-row items-center gap-x-2"}>
                    <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                    <span className={"font-bold"}>{title}</span>
                </div>

                {videoSrc && <VideoPlayer videoSrc={videoSrc}/>}

                <div className={"text-right text-gray-500"}>
                    {description}
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}

export default ProfileCourseUi;