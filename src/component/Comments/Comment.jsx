import React from "react";
import face from "@/assets/images/face.svg";
import rating from "@/assets/icon/rating.svg";

function Comment({className}) {
  return (
    <div className="border-b-2 border-gray-200 pb-4">
      <div className={['flex justify-between  ',className]}>
        <div  className="flex items-center gap-x-3 justify-center">
          <img src={face.src} />
          <h4 className="font-bold"> متین قطبی</h4>
          <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
          <h5 className="gap-1.5 text-gray-500">۱ هفته پیش</h5>
        </div>
        <div>
        <img src={rating.src} className="" />
        </div>
      </div>
      <div className="flex mt-3">
        من در این دوره شرکت کردم و واقعاً از آن لذت بردم. محتواهای آموزشی جذابی
        داشت و به من این امکان را داد تا مهارت‌های جدیدی در توسعه وب یاد
        <br></br> بگیرم. از معلمان و تیم پشتیبانی آنها نیز بسیار راضی بودم.
      </div>
    </div>
  );
}

export default Comment;
