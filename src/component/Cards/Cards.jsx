import React from 'react';
import Card from "@/component/Ui/Card-course/Card.jsx";
import "./Cards.css"

function Cards(props) {
    return (
        <div>
            <div className={"card-all p-8"}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            </div>
        </div>
    );
}

export default Cards;