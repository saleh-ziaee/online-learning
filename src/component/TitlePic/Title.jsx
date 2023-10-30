import React from 'react';
import banerpic from "../../assets/images/baner/banerpic.png"
import Button from "@/component/Ui/Button/Button.jsx";
import chart from "../../assets/images/baner/chart.png"
import nextIcon from "@/assets/icon/next.svg";
function Title(props) {
    return (
        <div>
<div className={"md:flex md:flex-row flex-col-reverse justify-between mt-14 items-center font-bold"}>
    <img src={banerpic} alt=""/>
    <div className={"flex flex-col md:me-[150px] leading-loose md:text-[30px] text-2xl"}>
        <span className={"md:text-left text-center"}> Hello Friends 🙌</span>
    <span className={"md:text-left text-center"}>I Am Sofia And We Want To Start</span>
    <span className={"md:text-left text-center"}>A <span className={"bg-gradient-to-r text-left from-primary-200 to-primary-100 inline-block text-transparent bg-clip-text"}>Web Design</span>Course Together </span>
        <span className={"md:text-left text-center"}>?😍  Do You Like It Too  </span>
        <div className={"mt-5 md:mt-20 flex self-end w-[75%] mx-auto md:mx-0 text-center"}>
            <Button size={"md"} className={""}><img  src={nextIcon }  className={""}/><span className={"text-xl md:text-2xl"}>Start New Course</span></Button>
        </div>
    </div>


</div>
        </div>
    );
}

export default Title;