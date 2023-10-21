import React from 'react';
import Button from '../component/Ui/Button/Button';
import Search from '../component/Ui/SearchInput/Search';
import Header from "../component/Header/Header.jsx";
// import SearchPanel from '../component/SearchPanel/SearchPanel';



function Ui(props) {
    const searchBtn = <div className="ml-2"><Button  variant="fill">دسته بندی </Button></div>
    return (
        <div>
          {/*  <Button></Button>*/}
          {/*<Search  />*/}
            <Header></Header>
          <Search  Button={searchBtn} />
          {/* <SearchPanel/> */}
        </div>
    );
}

export default Ui;