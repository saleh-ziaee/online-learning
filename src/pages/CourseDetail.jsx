import React, {useEffect, useState} from 'react';
import Trailer from "../assets/images/CourseDetail/Trailer.png"
import HeaderProduct from "@/component/HeaderProduct/HeaderProduct.jsx";
import Description from "@/component/Ui/CourseDescription/Description.jsx";
import AccordionCourse from "@/component/Accordion/AccordionCourse.jsx";
import Comment from "@/component/Comments/Comment.jsx";
import {useParams} from 'react-router-dom';
import {apiGetCourseDetail} from "@/api/course.js";

function CourseDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [courseDetail, setCourseDetail] = useState(null)

    console.log(courseDetail);


    const getCourse = async () => {
        if (loading) return

        try {
            setLoading(true)

            const result = await apiGetCourseDetail(id)

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

    return (
        <div className={""}>
            {loading || !courseDetail ? (
                <div>loading ...</div>
            ) : (
                <div className={"container w-[85%] mx-auto flex flex-row justify-between"}>
                    <div className={"mt-24 basis-2/3"}>
                        <HeaderProduct />
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
                                    <span>{courseDetail.section} بخش</span>
                                    <span>{courseDetail.videos} ویدیو</span>
                                    <span>{courseDetail.watchTime} ساعت</span>
                                </div>

                            </div>
                            <div className={"mt-8"}>

                                {
                                    courseDetail.sections?.map((item) => (
                                        <AccordionCourse {...item}
                                        />

                                    ))}

                            </div>
                        </div>
                        <div id="section4" className={"mt-10"}>
                            <span className={"font-bold text-xl"}>نظرات شرکت کنندگان</span>
                            <Comment></Comment>
                        </div>
                    </div>
                    <div className={"mt-44"}>
                        {/*<PriceCard*/}
                        {/*    {...item}*/}
                        {/*/>*/}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CourseDetail;