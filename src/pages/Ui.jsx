import React from 'react';
import Button from '../component/Ui/Button/Button';
import {Helmet} from "react-helmet";
import CourseDetail from "@/pages/CourseDetail.jsx";
import InfoCard from "@/component/InfoCard/InfoCard.jsx";
import CourseInfo from "@/component/CourseInfo/CourseInfo.jsx";
import HeaderProduct from "@/component/HeaderProduct/HeaderProduct.jsx";




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
            {/*<CategoryPanel></CategoryPanel>*/}
            {/*<Header></Header>*/}
            <CourseDetail></CourseDetail>
            {/*<InfoCard></InfoCard>*/}
            {/*<CourseInfo></CourseInfo>*/}
            {/*<Navbar></Navbar>*/}
            {/*<HeaderProduct></HeaderProduct>*/}
        </div>
    );
}

export default Ui;