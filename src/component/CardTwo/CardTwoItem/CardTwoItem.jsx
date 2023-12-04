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
import Link from 'next/link';

function CardTwoItem({id,image,title,student,level,lesson,score,days,children, className, props}) {
    return (
        <div
            className={`${className} flex mt-8 flex-col gap-4 md:flex md:flex-row md:gap-2 bg-[#FAFAFA] rounded-[12px] w-[100%] border-2 p-2`}>
            <img src={image} className={"w-full xs:w-1/2 lg:w-1/2 rounded-[12px] object-cover"} alt={"card-img"}/>
            <div className={"flex flex-col w-[100%] gap-6 h-[100%] basis-1/2 flex-grow"}>
                <h2 className={"text-[16px] font-semibold"}>{title}</h2>
                <div className={"flex items-center gap-2 justify-between text-xs"}>
                    <div className={"flex gap-2"}>
                        <img className={"w-4.5"} src={levelIcon.src}/>
                        <span>{level}</span>
                    </div>
                    <div className={"flex gap-2"}>
                        <img className={"w-3"} src={userIcon.src}/>
                        <span> دانش آموز : {student} </span>
                    </div>
                    <div className={"flex gap-2"}>
                        <img className={"w-3"} src={lessonIcon.src}/>
                        <span> درس : {lesson}  </span>
                    </div>
                </div>
                <img src={points.src} alt={"points"}/>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center"}>
                        <InfoCard title={`امتیاز : ${score}/100`}  />
                    </div>
                    <div className={"flex items-center"}>
                        <InfoCard title={`روز ها : ${days}`}/>
                    </div>
                </div>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-2"}>
                        <img src={teacherImg.src}/>
                        <div className={"text-center"}>
                            <h3 className={"text-[14px] font-bold text-center"}>Jon Kantner</h3>
                            <span className={"text-[12px]"}>Design teacher</span>
                        </div>
                    </div>
                    <Link href={`/yourCourse/${id}`}>
                        <Button size={"sm"}
                                variant={"fill"}> بزن بریم <img src={nextIcon.src} className={"rotate-180"}/>
                            {" "}
                        </Button>
                    </Link>
                    </div>
            </div>
        </div>
    );
}

export default CardTwoItem;