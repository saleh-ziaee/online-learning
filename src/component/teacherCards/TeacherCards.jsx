import React from 'react';
import Header from "@/component/Layout/Header/Header.jsx";
import Footer from "@/component/Layout/footer/Footer.jsx";

function TeacherCards({teacherImage,name,category,description}) {
    return (



        <div className={"md:flex md:flex-row flex flex-col items-center gap-4 bg-[#f1f1f1] rounded-2xl p-2 "}>
            <img src={teacherImage.src} className={"flex basis-1/2 w-full md:w-[40%] rounded-2xl "}/>
            <div className={"flex flex-col items-start justify-start gap-1"}>
                    <span className={"text-[#3E3232] text-[14px]"}>{name}</span>
                    <span className={"text-[#3E3232] opacity-75 text-[12px]"} >{category}</span>
                <p className={"text-[#4F4F4F] text-[10px]"}>{description}</p>
            </div>
        </div>


    );
}

export default TeacherCards;