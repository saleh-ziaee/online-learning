import React from 'react';
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import Button from "@/component/Ui/Button/Button.jsx";

function CardTwo(props) {
    return (
        <div className={"rounded-[12px]"}>
            <div className={"flex w-[100%] items-center justify-between"}>
                <h3>دوره های شما</h3>
                <Button variant={"gray"}></Button>
            </div>
            <div className={"flex items-center justify-center"}>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
                <CardTwoItem></CardTwoItem>
            </div>
        </div>
    );
}

export default CardTwo;