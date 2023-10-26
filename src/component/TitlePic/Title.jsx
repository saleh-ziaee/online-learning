import React from 'react';
import banerpic from "../../assets/images/baner/banerpic.png"
import Button from "@/component/Ui/Button/Button.jsx";
import chart from "../../assets/images/baner/chart.png"
import nextIcon from "@/assets/icon/next.svg";
function Title(props) {
    return (
        <div>
<div className={"flex justify-between mt-14 items-center font-bold"}>
    <img src={banerpic} alt=""/>
    <div className={"flex flex-col me-[150px] leading-loose text-[30px]"}>
        <span className={"text-left"}> Hello Friends 🙌</span>
    <span>I Am Sofia And We Want To Start</span>
    <span className={"text-left"}>A <span className={"bg-gradient-to-r text-left from-primary-200 to-primary-100 inline-block text-transparent bg-clip-text"}>Web Design</span>Course Together </span>
        <span className={"text-left"}>?😍  Do You Like It Too  </span>
        <div className={"mt-20 flex self-end w-[75%] text-center"}>
            <Button className={""}><img  src={nextIcon }  className={""}/>Start New Course</Button>
        </div>
    </div>


</div>
        </div>
    );
}

export default Title;