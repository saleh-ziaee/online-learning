import React from 'react';
import Button from '../component/Ui/Button/Button';
import Search from '../component/Ui/SearchInput/Search';
import Header from "../component/Header/Header.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
import TopPanel from "@/component/TopPanel/TopPanel.jsx";
import Title from "@/component/TitlePic/Title.jsx";
import {Helmet} from "react-helmet";
import {HelmetProvider} from "react-helmet-async";
import Login from "@/pages/Login.jsx";
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
          {/*  <Title></Title>*/
          }
            <Header></Header>
        </div>
    );
}

export default Ui;