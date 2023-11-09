import React from 'react';
import Card from "@/component/Ui/Card-course/Card.jsx";
import "./Cards.css"
import imagef from "@/assets/images/footer/bigImage.svg";
import {product} from "@/fake-array/product.js";

function Cards({className, props}) {
    return (
            <div className={ `${className} flex flex-col items-center justify-around w-full lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-3 xl:gap-4 gap-4 md:gap-4 mx-auto mt-5 flex-wrap`}>
                {
                    product.map((item)=>(
                        <Card
                        key={item.id}
                        img={item.image}
                        title={item.title}
                        student={item.student}
                        level={item.level}
                        lesson={item.lesson}
                        />

                    ))
                }
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}

            </div>

    );
}

export default Cards;