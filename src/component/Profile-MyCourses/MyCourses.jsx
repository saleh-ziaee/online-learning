import React from 'react';
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import Sidebar from "@/component/Sidebar/Sidebar.jsx";
import "./MyCourses.css"

function MyCourses(props) {
    return (
        <div className={"flex items-center bg-[#F3F5FF] h-[100vh] relative"}>
            <Sidebar className={"flex  basis-1/5"}/>
        <div className={"bg-[#F3F5FF]  flex basis-4/5"}>
            <header className={"flex items-start justify-between pm-8]"}>

            </header>

            <div className={"own-course__section"}>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>    <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>    <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
            </div>
        </div>
        </div>

    );
}

export default MyCourses;