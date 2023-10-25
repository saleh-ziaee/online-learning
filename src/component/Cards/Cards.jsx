import React from 'react';
import Card from "@/component/Ui/Card-course/Card.jsx";
import "./Cards.css"
import imagef from "@/assets/images/footer/bigImage.svg";

function Cards(props) {
    return (
        <div className={"rounded-[12px]"}>
            <div className={"flex items-center"}>
                <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                <span className={"text-black ms-3 font-bold text-[20px]"}>
دوره های جدید
                </span>
            </div>

            <div className={"card-all mt-5"}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            <Card></Card>
            <Card></Card>
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}

            </div>
        </div>
    );
}

export default Cards;