import React from 'react';
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import Button from "@/component/Ui/Button/Button.jsx";
import "./CardTwo.css"

function CardTwo(props) {
    return (
        <div className={"rounded-[12px] gap-4 p-4"}>
            <div className={"flex w-[100%] items-center justify-between"}>
                <h3>دوره های شما</h3>
                <Button variant={"gray"}>نمایش همه </Button>
            </div>
            <div className={"grid own-course__section gap-4"}>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
            </div>
        </div>
    );
}

export default CardTwo;