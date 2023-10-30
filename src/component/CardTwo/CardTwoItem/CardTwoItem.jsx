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
function CardTwoItem(children,className, props) {
    return (
        <div className={`${className} flex  flex-col gap-4 md:flex md:flex-row md:gap-2 items-center bg-[#FAFAFA] rounded-[12px] w-[100%]  p-2`}>
            <img src={cardImg} className={"w-[50%]  rounded-[12px]"} alt={"card-img"}/>

            <div className={"flex flex-col w-[100%] gap-2 h-[100%]"}>
                <h2 className={"text-[16px] font-semibold"}>Learn Figma - UI/UX Design Essential Training</h2>
                <div className={"flex items-center gap-2 justify-between"}>
                    <div className={"flex items-center gap-2"}>
                    <InfoCard src={levelIcon} title="حرفه ای"/>
                        
                    </div>
                    <div className={"flex items-center gap-2"}>
                    <InfoCard src={userIcon} title="شرکت کننده : 198 "/>
        
                    </div>
                    <div className={"flex items-center gap-2"}>
                    <InfoCard src={lessonIcon} title="بخش :  6"/>
                      
                    </div>
                </div>
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