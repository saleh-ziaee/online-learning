import React from 'react';
import levelIcon from "@/assets/icon/level.svg"
import userIcon from "@/assets/icon/user.svg"
import teacherImg from "@/assets/images/06.png"
import Button from "@/component/Ui/Button/Button.jsx";
import lessonIcon from "@/assets/icon/lesson.svg"
import cardImg from "@/assets/images/unsplash_7uSKXpksCKg.svg"
import nextIcon from "@/assets/icon/next.svg"
import points from "@/assets/images/points.svg"
function CardTwoItem(children, props) {
    return (
        <div className={"flex gap-6 items-center bg-[#FAFAFA] rounded-[12px]  p-4 w-fit"}>
            <img src={cardImg} className={"rounded-[12px]"} alt={"card-img"}/>

            <div className={"flex flex-col w-[100%] gap-4 h-[100%]"}>
                <h2 className={"text-[16px] font-semibold"}>Learn Figma - UI/UX Design Essential Training</h2>
                <div className={"flex items-center gap-4 justify-between"}>
                    <div className={"flex items-center gap-2"}>
                        <img src={levelIcon} alt={"level-icon"}/>
                        <span>حرفه ای</span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                        <img src={userIcon} alt={"user-icon"}/>
                        <span>دانش آموز :  </span>
                        <span>198</span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                        <img src={lessonIcon} alt={"lesson-icon"}/>
                        <span>درس :  </span>
                        <span>6</span>
                    </div>
                </div>
                <img src={points} alt={"points"}/>

                    <div className={"flex items-center justify-between"}>
                        <div className={"flex items-center"}>
                            <span>امتیاز :  </span>
                            <span>75 / 100</span>
                        </div>
                        <div className={"flex items-center"}>
                            <span>روز ها : </span>
                            <span>256</span>
                        </div>

                    </div>
                <div className={"flex items-center justify-between"}>

                    <div className={"flex items-center gap-2"}>
                        <img src={teacherImg}/>
                        <div className={"text-center"}>
                            <h3 className={"text-[14px] text-center"}>Jon Kantner</h3>
                            <span className={"text-[12px]"}>Design teacher</span>
                        </div>

                    </div>
                    <Button variant={"fill"}>   بزن بریم <img  src={nextIcon }  className={"rotate-180"}/> </Button>
                </div>
            </div>
        </div>
    );
}

export default CardTwoItem;