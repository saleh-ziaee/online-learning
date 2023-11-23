import { useEffect, useMemo, useState } from "react";
import Trailer from "@/assets/images/CourseDetail/Trailer.png";
import HeaderProduct from "@/component/HeaderProduct/HeaderProduct.jsx";
import Description from "@/component/Ui/CourseDescription/Description.jsx";
import AccordionCourse from "@/component/Accordion/AccordionCourse.jsx";
import Comment from "@/component/Comments/Comment.jsx";
import { apiGetCourseDetail } from "@/api/course.js";
import PriceCard from "@/component/PriceCard/PriceCard.jsx";
import CourseInfo from "@/component/CourseInfo/CourseInfo.jsx";
import folderIcon from "@/assets/images/CourseDetail/folder.png";
import videoIcon from "@/assets/images/CourseDetail/videos.png";
import watchIcon from "@/assets/images/CourseDetail/watch.png";
import TeacherCards from "@/component/teacherCards/TeacherCards.jsx";
import Header from "@/component/Layout/Header/Header.jsx";
import Footer from "@/component/Layout/footer/Footer.jsx";

import LoadingCourseDetail from "@/component/Loading/LoadingCourseDetail.jsx";
import { useRouter } from "next/router";
import useGetCourseDetails from "@/api/hooks/use-get-course-details";

function CourseDetail(props) {
  const router = useRouter();
  const courseId = router.query.course_id;

  const { data, isLoading } = useGetCourseDetails({ courseId} , {
        initialData: props.courseDetail
    });

  const courseDetail = useMemo(() => data, [data]);

  return (
    <div className={"w-[85%] mx-auto"}>
      <Header />
      {!courseDetail ? (
        <div className={"flex justify-center items-center h-[900px]"}>
          <LoadingCourseDetail></LoadingCourseDetail>
        </div>
      ) : (
        <div
          className={
            "container w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between"
          }
        >
          <div className={"mt-24 basis-2/3"}>
            <HeaderProduct
              title={courseDetail.title}
              subTitle={courseDetail.subTitle}
            />
            {courseDetail.teachers?.map((item) => (
              <CourseInfo {...item} />
            ))}
            {/*<CourseInfo*/}
            {/*// teacher={courseDetail.teacher}*/}
            {/*// comment={courseDetail.comment}*/}
            {/*// teacherImg={courseDetail.teacherImg}*/}
            {/*/>*/}
            <img className={"mx-auto mt-10 w-full"} src={Trailer.src} alt="" />
            <div className={"flex justify-between mt-16"}>
              <a className={"font-bold"} href={"#section1"} >
                توضیحات
              </a>
              <a className={"font-bold"} href={"#section2"}>سرفصل ها</a>
              <a className={"font-bold"} href={"#section3"}>مدرس </a>
              <a className={"font-bold"} href={"#section4"}>نظرات</a>
            </div>
              <div id={"section1"} className={"leading-10 bg-purple-100 rounded-2xl mt-10 px-10 py-14"}>
                  <span className={"text-xl font-bold"}>توضیحات</span>
                  <Description description={courseDetail.description} />
              </div>
            <div className={"py-10"} id={"section2"}>
              <div className={"flex flex-row justify-between"}>
                <span className={"text-xl font-bold"}>سرفصل‌ها</span>

                <div className={"flex gap-x-6"}>
                  <span className={"flex items-center gap-1"}>
                    <img src={folderIcon.src} />
                    {courseDetail.section} بخش
                  </span>
                  <span className={"flex items-center gap-1"}>
                    <img src={videoIcon.src} />
                    {courseDetail.videos} ویدیو
                  </span>
                  <span className={"flex items-center gap-1"}>
                    <img src={watchIcon.src} />
                    {courseDetail.watchTime} ساعت
                  </span>
                </div>
              </div>
              <div className={"mt-8"}>
                {courseDetail.sections?.map((item) => (
                  <AccordionCourse {...item}
                  />
                ))}
              </div>
            </div>
            <div className={" w-full md:w-[40%] mt-12"}>
              <h2
                className={"text-[#1D2026] text-[24px] w-full font-bold mb-8"}
              >
                {" "}
                مدرس دوره
              </h2>
              {courseDetail.teachers?.map((item) => (
                <TeacherCards {...item} />
              ))}
            </div>

            <div id="section4" className={"mt-10"}>
              <span className={"font-bold text-xl"}>نظرات شرکت کنندگان</span>
              <Comment></Comment>
            </div>
          </div>
          <div className={"mt-44"}>
            <PriceCard />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}


const getServerSideProps = async ({query}) => {
    let courseDetail = null

    try {
        const result = await apiGetCourseDetail(query.course_id)

        courseDetail = result
    } catch (err) {
        console.error(err)
    }


    return {
        props: {
            courseDetail
        }
    }
}
export default CourseDetail;
export {getServerSideProps}