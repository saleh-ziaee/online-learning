import React from 'react';
import {Link} from "react-router-dom";
import Button from "../component/Ui/Button/Button.jsx";
import Header from "@/component/Layout/Header/Header.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import SearchPanel from "@/component/SearchPanel/SearchPanel.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
import Footer from "@/component/InfoCard/footer/Footer.jsx";
import Cards from "@/component/Cards/Cards.jsx";
import NewsLetters from "@/component/NewsLetters/NewsLetters.jsx";
function Home(props) {
    return (
        <div className={"container w-[85%] mx-auto"}>
            <Header></Header>
            <CategoryPanel></CategoryPanel>
            <SearchPanel></SearchPanel>
            <Cards></Cards>
            <CardTwo></CardTwo>
            <Footer/>

        </div>

    );
}

export default Home;