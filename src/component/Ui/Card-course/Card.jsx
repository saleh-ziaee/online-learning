import React from "react";
import card1 from "../../../assets/images/card/card1.png";
import Score from "../../../assets/images/card/Score.png";
import cardImg from "@/assets/images/unsplash_7uSKXpksCKg.svg";
import levelIcon from "@/assets/icon/level.svg";
import userIcon from "@/assets/icon/user.svg";
import lessonIcon from "@/assets/icon/lesson.svg";
import points from "@/assets/images/points.svg";
import teacherImg from "@/assets/images/06.png";
import Button from "@/component/Ui/Button/Button.jsx";
import nextIcon from "@/assets/icon/next.svg";
import InfoCard from "@/component/InfoCard/InfoCard";
import Link from "next/link";

function Card({ image, title, student, level, lesson, id, ...props }) {
  return (
    <>
      <div
        className={
          " px-[10px] rounded-[12px] pt-[10px] pb-[20px] bg-secondary-300 border-2"
        }
      >
        <img
          className={"w-[100%] rounded-[10px] object-cover"}
          src={image}
          alt=""
        />
        <div className={"px-[4px] py-[16px]"}>
          <span className={"font-bold"}>{title}</span>
        </div>
        <div className={"flex items-center rounded-[12px]  p-1 w-[100%]"}>
          <div className={"flex flex-col w-[100%] h-[100%]"}>
            <div className={"flex items-center gap-4 justify-between"}>
              <div className={"flex justify-between w-full items-center gap-2"}>
                <InfoCard src={levelIcon.src} title={`${level} `} />
                <InfoCard src={userIcon.src} title={`   شرکت کننده :${student} `} />
                <InfoCard src={lessonIcon.src} title={`درس ها :  ${lesson}`} />
              </div>
            </div>
            <div className={"flex items-center justify-between mt-4"}>
              <Link href={`/course/${id}`}>
                <Button variant={"fill"}>
                  {" "}
                  شروع دوره <img src={nextIcon.src} className={"rotate-180"} />
                </Button>
              </Link>
              <img src={Score.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
