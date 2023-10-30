import React from 'react';
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import Sidebar from "@/component/Sidebar/Sidebar.jsx";
import userImg from "@/assets/images/Header/Profile.svg"
import "./MyCourses.css"
import notifeIcon from "@/assets/images/Header/nortife.svg"

function MyCourses(props) {
    return (
        <div className={"flex items-center bg-[#F3F5FF] h-[100vh] relative overflow-hidden"}>
            <Sidebar className={"flex  basis-1/5"}/>
        <div className={"bg-[#F3F5FF]  flex-col h-full"}>
            <header className={"flex items-start p-4 justify-between w-full "}>
                <div className={"flex items-center justify-center gap-4"}>
                    <img src={userImg} alt={"user-image"}/>
                    <span className={"text-dark"}> بهزاد پاشایی</span>
                </div>
                <div className={"flex items-center justify-center rounded-xl bg-[#9E5CF20D] w-[64px] h-[64px]"}>
                    <img src={notifeIcon} alt={"notife- icon"}/>
                </div>
            </header>

            <div className={"own-course__section" +
                " mb-8 grid grid-cols-1 overflow-auto pb-16 scrollNone  md:h-[100vh] md:overflow-scroll justify-center md:justify-start  flex-wrap"}>
                {/*<h2>دوره های من</h2>*/}
                <CardTwoItem className={"mt-4"} ></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
            </div>
        </div>
        </div>

    );
}

export default MyCourses;