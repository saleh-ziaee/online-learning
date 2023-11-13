import React from "react";
import IMG from "@/assets/images/IMG.svg";
import Score from "@/assets/icon/Score.svg";

function CourseInfo({teacher,comment,teacherImg}) {
  return (
    <div className="w-full">
      <div className="flex gap-3 justify-between">
        <div className="flex items-center">
          <img src={teacherImg} />
          <div>
            <h3 className="text-slate-500">مدرس:</h3>
            <h1 className="">{teacher}</h1>
          </div>
        </div>
        <div className="flex gap-2 text-slate-500  items-center">
          <img src={Score} />
          <span className="whitespace-nowrap">({comment} رای)</span>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
