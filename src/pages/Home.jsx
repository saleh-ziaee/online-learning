import React from 'react';
import {Link} from "react-router-dom";
import Button from "../component/Ui/Button/Button.jsx";
import Header from "@/component/Layout/Header/Header.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import SearchPanel from "@/component/SearchPanel/SearchPanel.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
import Footer from "@/component/Layout/footer/Footer.jsx";
import Cards from "@/component/Cards/Cards.jsx";
import NewsLetters from "@/component/NewsLetters/NewsLetters.jsx";
import PriceCard from "@/component/PriceCard/PriceCard.jsx";
import Title from "@/component/TitlePic/Title.jsx";
import DescriptionCards from "@/component/DescriptionCards/DescriptionCards.jsx";
function Home(props) {
    return (
        <div className={"container w-[95%] md:w-[85%]  mx-auto"}>
            <Header></Header>
            <CategoryPanel></CategoryPanel>
            <Title></Title>
            <SearchPanel></SearchPanel>
            <div className={"flex items-center"}>
                <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                <span className={"text-black ms-3 font-bold text-2xl"}>
جدیدترین دوره ها
                </span>
            </div>
            <Cards></Cards>
            <div className={"flex items-center mt-10"}>
                <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                <span className={"text-black ms-3 font-bold md:text-2xl"}>
دوره های شما
                </span>
            </div>

            <DescriptionCards></DescriptionCards>
            <CardTwo></CardTwo>
            <Footer/>

        </div>

    );
}

export default Home;