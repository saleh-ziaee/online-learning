import React from "react";
import InfoCard from "@/component/InfoCard/InfoCard.jsx";
import userIcon from "@/assets/icon/user.svg";
import levelIcon from "@/assets/icon/level.svg";
import time from "@/assets/icon/time.svg";
import Button from "@/component/Ui/Button/Button.jsx";

import styles from "./PriceCard.module.css";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { apiGetCourseDetail } from "@/api/course";
import useGetCourseDetails from "@/api/hooks/use-get-course-details";

function PriceCard() {
  const router = useRouter();
  const courseId = router.query.course_id;

  const { data, isLoading } = useGetCourseDetails({ courseId });

  return (
    <div
      className={"flex py-[24px] rounded-xl gap-[24px] border-2 p-5 mx-auto "}
    >
      <div className={"flex-col card-price w-full"}>
        <div className={"flex gap-1 justify-center w-full"}>
          <span>{data.offPrice} تومان</span>
          <del className={"text-secondary-200 text-sm ms-2"}>
            {data.price} تومان
          </del>
          <div
            className={
              "bg-orange-200 flex justify-center rounded-[8px] p-1 w-[100px]"
            }
          >
            <span className={"text-sm text-orange-400"}>{data.off} تخفیف</span>
          </div>
        </div>
        <div className={"mt-5 w-full " + styles["line-sep"]}></div>
        <div className={"mt-4 flex-col"}>
          <div className={"flex flex-row justify-between mt-3"}>
            <InfoCard src={time.src} title="زمان دوره"></InfoCard>
            <span className={"text-secondary-900"}>{data.deadline} ماه </span>
          </div>
          <div className={"flex flex-row justify-between mt-3"}>
            <InfoCard src={levelIcon.src} title="سطح دوره"></InfoCard>
            <span className={"text-secondary-900"}>{data.level} </span>
          </div>
          <div className={"flex flex-row justify-between mt-3"}>
            <InfoCard src={userIcon.src} title="شرکت کنندگان"></InfoCard>
            <span className={"text-secondary-900"}>{data.student} نفر </span>
          </div>
          <div className={"flex flex-row justify-between mt-3"}>
            <InfoCard src={userIcon.src} title="زبان "></InfoCard>
            <span className={"text-secondary-900"}>فارسی</span>
          </div>
        </div>
        <div className="mt-5 w-full line-sep"></div>
        <div className={"mt-5 flex flex-col gap-6"}>
          <Button size={"md"}>ثبت نام و خرید</Button>
          <span className={"text-secondary-900 text-sm"}>
            همه دوره ها شامل ۳۰ روز گارانتی بازگشت وجه می‌باشند.
          </span>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
