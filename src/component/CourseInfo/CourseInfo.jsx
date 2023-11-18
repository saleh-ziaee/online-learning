import React from "react";
import IMG from "@/assets/images/IMG.svg";
import Score from "@/assets/icon/Score.svg";

function CourseInfo({name,comment,teacherImage}) {
  return (
    <div className="w-full">
      <div className="flex gap-3 justify-between">
        <div className="flex items-center gap-2">
          <img src={teacherImage.src} className={"w-[50px] rounded-full h-[50px]"} />
          <div>
            <h3 className="text-slate-500">مدرس:</h3>
            <h1 className="">{name}</h1>
          </div>
        </div>
        <div className="flex gap-2 text-slate-500  items-center">
          <img src={Score.src} />
          <span className="whitespace-nowrap">({comment} رای)</span>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
