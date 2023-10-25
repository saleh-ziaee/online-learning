import React from 'react';
import './Card.css';
import card1 from "../../../assets/images/card/card1.png"
import Score from "../../../assets/images/card/Score.png"
import cardImg from "@/assets/images/unsplash_7uSKXpksCKg.svg";
import levelIcon from "@/assets/icon/level.svg";
import userIcon from "@/assets/icon/user.svg";
import lessonIcon from "@/assets/icon/lesson.svg";
import points from "@/assets/images/points.svg";
import teacherImg from "@/assets/images/06.png";
import Button from "@/component/Ui/Button/Button.jsx";
import nextIcon from "@/assets/icon/next.svg";

function Card(props) {
    return (
        <>
        <div className={'w-[360px] h-[413px] px-[10px] rounded-[12px] pt-[10px] pb-[20px] bg-secondary-300'}>
            <img className={"w-[100%] rounded-[10px]"} src={card1} alt=""/>
            <div className={"px-[4px] py-[16px]"}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className={""}>Learn Figma - UI/UX Design Essential Training</span>
        </div>
            <div className={"flex items-center rounded-[12px]  p-1 w-fit"}>

                <div className={"flex flex-col w-[100%] h-[100%]"}>
                    <div className={"flex items-center gap-4 justify-between"}>

                        <div className={"flex items-center gap-2"}>
                            <img src={levelIcon} alt={"level-icon"}/>
                            <span>حرفه ای</span>
                            <img src={userIcon} alt={"user-icon"}/>
                            <span>دانش آموز :</span>
                            <span>198</span>

                            <img src={lessonIcon} alt={"lesson-icon"}/>
                            <span>درس :  </span>
                            <span>6</span>
                        </div>
                    </div>
                    <div className={"flex items-center justify-between mt-4"}>
                        <Button variant={"fill"}>   شروع دوره  <img  src={nextIcon }  className={"rotate-180"}/> </Button>
                        <img src={Score} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;