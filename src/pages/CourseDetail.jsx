import React from 'react';
import Header from "@/component/Layout/Header/Header.jsx";
import PriceCard from "@/component/PriceCard/PriceCard.jsx";
import Trailer from "../assets/images/CourseDetail/Trailer.png"
import InfoCard from "@/component/InfoCard/InfoCard.jsx";
import HeaderProduct from "@/component/HeaderProduct/HeaderProduct.jsx";
import Description from "@/component/Ui/CourseDescription/Description.jsx";
import AccordionCourse from "@/component/Accordion/AccordionCourse.jsx";
import Comment from "@/component/Comments/Comment.jsx";

function CourseDetail(props) {

    return (
        <div className={""}>
                 <Header></Header>
            <div className={"container w-[65%] mx-auto flex flex-row justify-between"}>
                <div className={"mt-24 basis-2/3"}>
                    <HeaderProduct></HeaderProduct>
                    <img className={"mx-auto mt-10 w-full"} src={Trailer} alt=""/>
                    <div className={"flex justify-between mt-16"}>
                        <a href={"#section1"} className={""}>توضیحات</a>
                        <a href={"#section2"}>سرفصل ها</a>
                        <a href={"#section3"}>مدرس </a>
                        <a href={"#section3"} >نظرات</a>
                    </div>
                    <Description></Description>
                    <div className={"mt-12"}>
                        <div className={"flex flex-row justify-between"}>
                            <span className={"text-xl font-bold"}>سرفصل‌ها</span>
                            <div className={"flex gap-x-6"}>
                                <span>۱۲ بخش</span>
                                <span>۹۸ ویدیو</span>
                                <span>۱۴۴ ساعت</span>
                            </div>
                        </div>
                        <div className={"mt-8"}>
                            <AccordionCourse title={"شروع ماجراجویی توسعه وب با HTML/CSS"}></AccordionCourse>

                        </div>
                    </div>
                    <div id="section4" className={"mt-10"}>
                        <span className={"font-bold text-xl"}>نظرات شرکت کنندگان</span>
                        <Comment></Comment>
                    </div>
                </div>
                <div className={"mt-44"}>
                    <PriceCard></PriceCard>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;