import React from 'react';
import Button from "@/component/Ui/Button/Button.jsx";
import box from "@/assets/images/Rectangle 24.svg";
import box2 from "@/assets/images/Rectangle 25.svg"
import Search from "@/component/Ui/SearchInput/Search.jsx";

function NewsLetters(props) {
    return (
        <div className={"flex items-center relative mt-8 h-[275px] justify-between rounded-[12px] bg-lightBlue "}>
            <h2 className={"w-[30%] text-[36px] mr-8 font-bold"}>با خبرنامه<span className={"text-blue font-bold text-[36px]"}> آکادمی </span>از آخرین دوره ها مطلع شوید</h2>
            <Search className={"z-40 ml-8"} placeholder={"آدرس ایمیل ..."}>
                <Button>تایید</Button>
            </Search>
            <img src={box} className={"absolute left-8"}/>
            <img src={box2} className={"absolute left-0"}/>
        </div>
    );
}

export default NewsLetters;