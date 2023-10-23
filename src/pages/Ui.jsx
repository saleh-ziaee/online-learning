import React from 'react';
import Button from '../component/Ui/Button/Button';
import Search from '../component/Ui/SearchInput/Search';
import Header from "../component/Header/Header.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
import TopPanel from "@/component/TopPanel/TopPanel.jsx";
// import SearchPanel from '../component/SearchPanel/SearchPanel';



function Ui(props) {
    const searchBtn = <div className="ml-2"><Button  variant="fill">دسته بندی </Button></div>
    return (
        <div>
          {/*  <Button></Button>*/}
          {/*<Search  />*/}
          {/*  <Header></Header>*/}
          {/*  <CategoryPanel></CategoryPanel>*/}
          {/*<Search  Button={searchBtn} />*/}
          {/* <SearchPanel/> */}
            <CardTwo></CardTwo>
            <TopPanel></TopPanel>
        </div>
    );
}

export default Ui;