import React from 'react';
import {Link} from "react-router-dom";
import Button from "../component/Ui/Button/Button.jsx";
import Header from "../component/Header/Header.jsx";
import TopCategory from "@/component/TopCategory/TopCategory.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import SearchPanel from "@/component/SearchPanel/SearchPanel.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
import Footer from "@/component/footer/Footer.jsx";
function Home(props) {
    return (



        <div className={"container w-[85%] mx-auto"}>
            <Header></Header>

            <CategoryPanel></CategoryPanel>

            <SearchPanel></SearchPanel>

            <CardTwo></CardTwo>

            <Footer></Footer>

        </div>

    );
}

export default Home;