import React, {useEffect, useState} from 'react';
import Trailer from "../assets/images/CourseDetail/Trailer.png"
import HeaderProduct from "@/component/HeaderProduct/HeaderProduct.jsx";
import Description from "@/component/Ui/CourseDescription/Description.jsx";
import AccordionCourse from "@/component/Accordion/AccordionCourse.jsx";
import Comment from "@/component/Comments/Comment.jsx";
import {useParams} from 'react-router-dom';
import {apiGetCourseDetail} from "@/api/course.js";
import PriceCard from "@/component/PriceCard/PriceCard.jsx";
import CourseInfo from "@/component/CourseInfo/CourseInfo.jsx";
import folderIcon from "@/assets/images/CourseDetail/folder.png";
import videoIcon from "@/assets/images/CourseDetail/videos.png";
import  watchIcon from "@/assets/images/CourseDetail/watch.png"
import TeacherCards from "@/component/teacherCards/TeacherCards.jsx";
import Header from "@/component/Layout/Header/Header.jsx";
import Footer from "@/component/Layout/footer/Footer.jsx";

import LoadingCourseDetail from "@/component/Loading/LoadingCourseDetail.jsx";

function CourseDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [courseDetail, setCourseDetail] = useState(null)
    const getCourse = async () => {
        if (loading) return

        try {
            setLoading(true)

            const result = await apiGetCourseDetail(id)
            // console.log(result.sections)
            setCourseDetail(result)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            getCourse(id)
        }
    }, [id]);
    {
        console.log(courseDetail);

    }
    return (
        <div className={"w-[85%] mx-auto"}>
            <Header/>
            {loading || !courseDetail ? (
                <div className={"flex justify-center items-center h-[900px]"}>

                    <LoadingCourseDetail></LoadingCourseDetail>
                </div>
            ) : (
                <div className={"container w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between"}>
                    <div className={"mt-24 basis-2/3"}>
                        <HeaderProduct
                        title={courseDetail.title}
                        subTitle={courseDetail.subTitle}
                        />
                        {
                            courseDetail.teachers?.map((item)=>(
                                <CourseInfo {...item}
                                />
                            ))
                        }
                        {/*<CourseInfo*/}
                        {/*// teacher={courseDetail.teacher}*/}
                        {/*// comment={courseDetail.comment}*/}
                        {/*// teacherImg={courseDetail.teacherImg}*/}
                        {/*/>*/}
                        <img className={"mx-auto mt-10 w-full"} src={Trailer} alt=""/>
                        <div className={"flex justify-between mt-16"}>
                            <a href={"#section1"} className={""}>توضیحات</a>
                            <a href={"#section2"}>سرفصل ها</a>
                            <a href={"#section3"}>مدرس </a>
                            <a href={"#section3"}>نظرات</a>
                        </div>
                        <Description description={courseDetail.description}/>
                        <div className={"mt-12"}>
                            <div className={"flex flex-row justify-between"}>
                                <span className={"text-xl font-bold"}>سرفصل‌ها</span>

                                <div className={"flex gap-x-6"}>
                                    <span className={"flex items-center gap-1"}>
                                        <img src={folderIcon}/>
                                        {courseDetail.section} بخش
                                    </span>
                                    <span className={"flex items-center gap-1"}>
                                        <img src={videoIcon}/>
                                        {courseDetail.videos} ویدیو</span>
                                    <span className={"flex items-center gap-1"}>
                                        <img src={watchIcon}/>
                                        {courseDetail.watchTime} ساعت</span>
                                </div>

                            </div>
                            <div className={"mt-8"}>
                                {
                                    courseDetail.sections.map((item) => (
                                        <AccordionCourse {...item}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className={"mt-12"}>
                                    <h2 className={"text-[#1D2026] text-[24px] w-full font-bold mb-8"}> مدرس دوره</h2>
                        {
                            courseDetail.teachers?.map((item)=>(
                                <TeacherCards {...item}
                                />
                            ))
                        }
                        </div>

                        <div id="section4" className={"mt-10"}>
                            <span className={"font-bold text-xl"}>نظرات شرکت کنندگان</span>
                            <Comment></Comment>
                        </div>
                    </div>
                    <div className={"mt-44"}>
                        <PriceCard
                            offPrice={courseDetail.offPrice}
                            off={courseDetail.off}
                            price={courseDetail.price}
                            student={courseDetail.student}
                            level={courseDetail.level}
                            deadline={courseDetail.deadline}
                        />
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
}



export default CourseDetail;