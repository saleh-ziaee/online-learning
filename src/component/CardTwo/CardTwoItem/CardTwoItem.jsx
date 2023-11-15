import React from 'react';
import levelIcon from "@/assets/icon/level.svg"
import userIcon from "@/assets/icon/user.svg"
import teacherImg from "@/assets/images/06.png"
import Button from "@/component/Ui/Button/Button.jsx";
import lessonIcon from "@/assets/icon/lesson.svg"
import cardImg from "@/assets/images/unsplash_7uSKXpksCKg.svg"
import nextIcon from "@/assets/icon/next.svg"
import points from "@/assets/images/points.svg"
import InfoCard from '@/component/InfoCard/InfoCard';
import {Link} from "react-router-dom";

function CardTwoItem({id,img,title,student,level,lesson,score,days,children, className, props}) {
    return (
        <div
            className={`${className} flex mt-8  flex-col gap-4 md:flex md:flex-row md:gap-2 items-center bg-[#FAFAFA] rounded-[12px] w-[100%] border-2 p-2`}>
            <img src={img} className={"w-full md:w-[50%] basis-1/2 rounded-[12px]"} alt={"card-img"}/>

            <div className={"flex flex-col w-[100%] gap-6 h-[100%] basis-1/2"}>
                <h2 className={"text-[16px] font-semibold"}>Learn Figma - UI/UX Design Essential Training</h2>
                <div className={"flex items-center gap-2 justify-between"}>
                    <div className={"flex gap-2"}>
                        <img src={levelIcon}/>
                        <span>{level}</span>
                    </div>
                    <div className={"flex gap-2"}>
                        <img src={userIcon}/>
                        <span> دانش آموز : {student} </span>
                    </div>
                    <div className={"flex gap-2"}>
                        <img src={lessonIcon}/>
                        <span> درس : {lesson}  </span>
                    </div>
                </div>
                {/*<div className={"flex items-center gap-2"}>*/}
                {/*    /!*<InfoCard src={levelIcon} title={level}/>*!/*/}
                {/*    /!*<InfoCard src={userIcon} title={student ` دانش آموز : `}/>*!/*/}
                {/*    /!*<InfoCard src={lessonIcon}  title={lesson ` درس : `}/>*!/*/}
                {/*    */}
                {/*</div>*/}
                {/*hladkfsk*/}
                <img src={points} alt={"points"}/>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center"}>
                        <InfoCard title="امتیاز : 75 / 100  "/>
                    </div>
                    <div className={"flex items-center"}>
                        <InfoCard title="روز ها : 256"/>
                    </div>
                </div>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-2"}>
                        <img src={teacherImg}/>
                        <div className={"text-center"}>
                            <h3 className={"text-[14px] font-bold text-center"}>Jon Kantner</h3>
                            <span className={"text-[12px]"}>Design teacher</span>
                        </div>

                    </div>
                    <Link to={`/your-course/${id}`}>
                        <Button size={"sm"} variant={"fill"}> بزن بریم <img src={nextIcon} className={"rotate-180"}/> </Button>
                    </Link>
                    </div>

            </div>
        </div>
    );
}

export default CardTwoItem;