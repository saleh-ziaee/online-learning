import React from "react";
import arrow from "../../assets/icon/arrows.svg";
import Search from "../Ui/SearchInput/Search.jsx";
import Button from "@/component/Ui/Button/Button.jsx";

function SearchPanel() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center ">
        <div className="">
          <h1 className="text-3xl font-bold text-center">
            در میان 58340 دوره جستجو کنید و<br></br> دوره مورد علاقه خود را
            بیابید
          </h1>
        </div>
        <div className="flex items-center gap-4 m-8">
         <Button>دسته بندی</Button>
          <Search />
          <p className="text-lg">یا دوره های زیر را مشاهده کنید...</p>
          <img src={arrow}  className="-scale-x-100"/>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
