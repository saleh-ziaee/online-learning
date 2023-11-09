import React from 'react';
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import Button from "@/component/Ui/Button/Button.jsx";
import "./CardTwo.css"
import {cardtowarray} from "@/fake-array/cardtowarray.js";

function CardTwo(props) {
    return (
        <div className={"rounded-[12px] gap-4 p-4"}>
            <div className={"flex w-[100%] items-center justify-between"}>
                <h3>دوره های شما</h3>
                <Button variant={"gray"}>نمایش همه </Button>
            </div>
            <div className={"flex flex-col items-center justify-around w-full md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-4  gap-4 md:gap-4 mx-auto mt-5 flex-wrap"}>
                {
                    cardtowarray.map((item)=>(
                        <CardTwoItem
                            key={item.id}
                            img={item.image}
                            title={item.title}
                            student={item.student}
                            level={item.level}
                            lesson={item.lesson}
                            score={item.score}
                            days={item.days}
                        />
                    ))
                }



                )
            </div>
        </div>
    );
}

export default CardTwo;