import React from 'react';
import Button from '../component/Ui/Button/Button';

import {Helmet} from "react-helmet";

import MyCourses from "@/component/Profile-MyCourses/MyCourses.jsx";
import TopCategory from "@/component/TopCategory/TopCategory.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import Header from "@/component/Layout/Header/Header.jsx";
import Navbar from "@/component/Navbar/Navbar.jsx";
import PriceCard from "@/component/PriceCard/PriceCard.jsx";
// import SearchPanel from '../component/SearchPanel/SearchPanel';



function Ui(props) {

    const searchBtn = <div className="ml-2"><Button  variant="fill">دسته بندی </Button></div>
    return (
        <div>
            <Helmet>
                <title>ui</title>
            </Helmet>
          {/*  <Button></Button>*/}
          {/*<Search  />*/}
          {/*  <Header></Header>*/}
          {/*  <CategoryPanel></CategoryPanel>*/}
          {/*<Search  Button={searchBtn} />*/}
          {/* <SearchPanel/> */}
          {/*  <CardTwo></CardTwo>*/}
          {/*  <TopPanel></TopPanel>*/}
          {/*  <Title></Title>*/}
            {/*<Header></Header>*/}
            {/*    <MyCourses></MyCourses>*/}

        </div>
    );
}

export default Ui;