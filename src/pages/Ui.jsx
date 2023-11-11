import React from 'react';
import Button from '../component/Ui/Button/Button';
import {Helmet} from "react-helmet";

// import HeaderProduct from '@/component/HeaderProduct/HeaderProduct';
// import CourseInfo from '@/component/CourseInfo/CourseInfo';
// import FooterCommentBox from '@/component/FooterCommentBox/FooterCommentBox';
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

            {/*<Navbar></Navbar>*/}
            {/*<HeaderProduct></HeaderProduct>*/}
        </div>
    );
}

export default Ui;