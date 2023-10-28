import React from "react";
import arrow from "../../assets/icon/arrows.svg";
import Search from "../Ui/SearchInput/Search.jsx";
import Button from "@/component/Ui/Button/Button.jsx";
import SearchIcon from "@/assets/icon/SearchIcon.svg"

function SearchPanel() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center ">
        <div className="">
          <h1 className="text-3xl font-bold text-center">
            در میان <span className={"text-[#B176F2] text-3xl font-bold "}>58340</span> دوره جستجو کنید و دوره مورد علاقه خود را
            بیابید
          </h1>
        </div>
        <div className="flex items-center gap-4 m-8">
            <Search className={"w-[100%] pr-4"} icon={SearchIcon} >
                <Button className={"h-[80%] w-[140px] text-center"}>دسته بندی</Button>
            </Search>
          <p className="text-lg">یا دوره های زیر را مشاهده کنید...</p>
          <img src={arrow}  className="-scale-x-100"/>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
