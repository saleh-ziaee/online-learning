import React, {useEffect, useState} from 'react';
import Sidebar from "@/component/Sidebar/Sidebar.jsx";
import menuIcon from "@/assets/images/navbar/menu.png";
import userImg from "@/assets/images/Header/Profile.svg";
import notifeIcon from "@/assets/images/Header/nortife.svg";
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import ProfileCourseUi from "@/component/Ui/ProfileCourse/ProfileCourseUi.jsx";
import ProfileCourseSection1 from "@/component/ProfileCourse/ProfileCourseSection1.jsx";
import {useParams} from "react-router-dom";
import {apiGetCourseDetail} from "@/api/course.js";
import {apiGetYourCourse} from "@/api/yourcourse.js";

function ProfileCourse(props) {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [yourCourse, setYourCourse] = useState(null)
    console.log(yourCourse);

    const [isClicked, setIsClicked] = useState(false)
    const toggleMenu = () => {
        setIsClicked(!isClicked)
    }
    const getyourCourse = async () =>{
        if (loading) return

        try {
            setLoading(true)
            const result = await apiGetYourCourse(id)

            setYourCourse(result)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (id) {
            getyourCourse(id)
        }
    }, [id]);

    return (
        <div className={""}>
            {loading || !yourCourse ? (
                <div>loading ...</div>
            ) : (
            <div className={"md:flex w-full md:items-center bg-[#F3F5FF] h-[100vh] relative md:overflow-hidden"}>
                {
                    isClicked&&(
                        <Sidebar onClick={toggleMenu} className={"flex z-50 absolute right-0 top-0 w-[60%] md:hidden"}></Sidebar>
                    )
                }
                <Sidebar className={"md:flex  md:basis-1/5 hidden"}/>
                <div className={"bg-[#F3F5FF]  flex-col w-full h-full"}>
                    <header className={"flex md:items-start items-center  p-4 justify-between w-full border-b-2"}>
                        <button onClick={toggleMenu } className={"md:hidden block"}>
                            <img src={menuIcon} alt={"menu-icon"} className={"w-[24px] h-[24px]"}/>
                        </button>
                        <div className={"flex items-center justify-center gap-4"}>
                            <img src={userImg} alt={"user-image"}/>
                            <span className={"text-dark"}> بهزاد پاشایی</span>
                        </div>
                        <div className={"flex items-center justify-center rounded-xl bg-[#9E5CF20D] w-[64px] h-[64px]"}>
                            <img src={notifeIcon} alt={"notife- icon"}/>
                        </div>
                    </header>

                    {/*<div className={*/}
                    {/*    " coursesSection flex flex-col items-center justify-center w-full md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-4  gap-4 md:gap-4 mx-auto mt-5 pb-24 scrollNone  md:h-[100vh] md:overflow-scroll md:pb-24 md:justify-start  flex-wrap md:scrollNone"}>*/}
                    {/* */}
                    {/*</div>*/}
                    <div className={"mt-5"}>
                        {
                            yourCourse.map((detail)=>(
                                <ProfileCourseUi
                                    key={detail.id}
                                    title={detail.title}
                                    video={detail.video}
                                    description={detail.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
export default ProfileCourse;