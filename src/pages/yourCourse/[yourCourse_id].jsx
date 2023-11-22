import React, {useEffect, useState} from 'react';
import Sidebar from "@/component/Sidebar/Sidebar.jsx";
import menuIcon from "@/assets/images/navbar/menu.png";
import userImg from "@/assets/images/Header/Profile.svg";
import notifeIcon from "@/assets/images/Header/nortife.svg";
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import ProfileCourseUi from "@/component/Ui/ProfileCourse/ProfileCourseUi.jsx";
import ProfileCourseSection1 from "@/component/ProfileCourse/ProfileCourseSection1.jsx";
import {apiGetCourseDetail} from "@/api/course.js";
import {apiGetYourCourse} from "@/api/yourcourse.js";
import AccordionCourse from "@/component/Accordion/AccordionCourse.jsx";
import videiOne from "@/assets/videos/16-using-children-prop.mp4"
import VideoPlayer from "@/component/video/VideoPlayer.jsx";
import {useRouter} from "next/router";


function YourCourse_id(props) {
    const router = useRouter();
   const  yourCourseId=router.query.yourCourse_id;
    const [loading, setLoading] = useState(false)
    const [yourCourse, setYourCourse] = useState(null)
    const [accordionData, setAccordionData] = useState(null)

    const [isClicked, setIsClicked] = useState(false)

    const toggleMenu = () => {
        setIsClicked(!isClicked)
    }
    const getyourCourse = async () =>{
        if (loading) return

        try {
            setLoading(true)
            const result = await apiGetYourCourse(yourCourseId)
            console.log(result)

            setYourCourse(result)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (yourCourseId) {
            getyourCourse(yourCourseId)
        }
    }, [yourCourseId]);
    const getAccordionData=(item)=>{
        setAccordionData(item)
    }
    console.log(accordionData);

    return (
        <div className={"md:flex w-full md:items-center bg-[#F3F5FF]  relative "}>

            {loading || !yourCourse ? (
                <div>loading ...</div>
            ) : (
            <div className={"md:flex w-full md:items-center bg-[#F3F5FF]  relative "}>
                {
                    isClicked&&(
                        <Sidebar onClick={toggleMenu} className={"flex z-50 absolute right-0 top-0 w-[60%] md:hidden"}></Sidebar>
                    )
                }
                <Sidebar className={"md:flex  md:basis-1/5 hidden"}/>
                <div className={"bg-[#F3F5FF]  flex-col w-full h-full"}>
                    <header className={"flex md:items-start items-center  p-4 justify-between w-full border-b-2"}>
                        <button onClick={toggleMenu } className={"md:hidden block"}>
                            <img src={menuIcon.src} alt={"menu-icon"} className={"w-[24px] h-[24px]"}/>
                        </button>
                        <div className={"flex items-center justify-center gap-4"}>
                            <img src={userImg.src} alt={"user-image"}/>
                            <span className={"text-dark"}> بهزاد پاشایی</span>
                        </div>
                        <div className={"flex items-center justify-center rounded-xl bg-[#9E5CF20D] w-[64px] h-[64px]"}>
                            <img src={notifeIcon.src} alt={"notife- icon"}/>
                        </div>
                    </header>

                    {/*<div className={*/}
                    {/*    " coursesSection flex flex-col items-center justify-center w-full md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-4  gap-4 md:gap-4 mx-auto mt-5 pb-24 scrollNone  md:h-[100vh] md:overflow-scroll md:pb-24 md:justify-start  flex-wrap md:scrollNone"}>*/}
                    {/* */}
                    {/*</div>*/}
                    <div className={"flex flex-col md:flex md:flex-row md:basis-4/5 items-center justify-center p-8 gap-8"}>

                    <div className={"mt-5 basis-1/2"}>
                        {/*{*/}
                        {/*    yourCourse.map((detail)=>(*/}
                        {/*        <ProfileCourseUi*/}
                        {/*            key={detail.id}*/}
                        {/*            title={detail.title}*/}
                        {/*            video={detail.video}*/}
                        {/*            description={detail.description}*/}
                        {/*        />*/}
                        {/*    ))*/}
                        {/*}*/}
                        {
                            <ProfileCourseUi
                            title={accordionData?.title}
                            videoSrc={accordionData?.videoSrc}
                            description={accordionData?.description}
                            />

                        }
                        {/*{*/}
                        {/*    accordionData?.map((accordion)=>(*/}
                        {/*        <VideoPlayer*/}
                        {/*            videoSrc={accordion?.video}*/}
                        {/*        />*/}
                        {/*    ))*/}
                        {/*}*/}
                        {/*<VideoPlayer*/}
                        {/*videoSrc={accordionData?.videoSrc}*/}
                        {/*/>*/}
                    </div>
                <div className={" basis-1/2"}>
                    {
                        yourCourse.sections.map((item) => (
                            <AccordionCourse  {...item}
                            onClick={getAccordionData}
                            />
                        ))
                    }
                </div>
                </div>
                </div>
            </div>
            )}
        </div>
    );
}
export default YourCourse_id;