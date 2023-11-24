import React, {useState} from 'react';
// import "./MyCourses.css"
import CardTwo from "@/component/CardTwo/CardTwo.jsx";

function MyCourses(props) {
    return (
        <div className={"md:flex  md:items-center bg-[#F3F5FF] relative md:overflow-hidden"}>

            {/*<h2>دوره های من</h2>*/}
            <CardTwo/>
        </div>

    );
}

export default MyCourses;