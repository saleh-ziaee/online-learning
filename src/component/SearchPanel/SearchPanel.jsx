import React from "react";
import arrow from "../../assets/icon/arrows.svg";
import Search from "../Ui/SearchInput/Search.jsx";

function SearchPanel() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="">
          <h1 className="text-3xl">
            در میان 58340 دوره جستجو کنید و<br></br> دوره مورد علاقه خود را
            بیابید
          </h1>
        </div>
        <div className="flex items-center m-8">
          <img src={arrow}  className="-scale-x-100"/>
          <Search />
          <p className="text-lg">...یا دوره های زیر را مشاهده کنید</p>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
