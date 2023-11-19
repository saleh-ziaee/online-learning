import { useState } from "react";
import arrow from "../../assets/icon/arrows.svg";
import Search from "../Ui/SearchInput/Search.jsx";
import Button from "@/component/Ui/Button/Button.jsx";
import SearchIcon from "@/assets/icon/SearchIcon.svg";
import { useRouter } from "next/router";

function SearchPanel() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [query] = useState(() => router.query.q);

  const handleSearch = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        q: query,
      },
    });
  };

  const handleCategory = (selectedCategory) => {
    router.push({
      pathname: "/search",
      query: {
        c: selectedCategory,
      },
    });
  };
  const toggleCategory = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="md:mt-8 mt-20 ">
      <div className="flex flex-col items-center gap-y-5">
        <div className="">
          <h1 className="md:text-3xl text-2xl font-bold text-center">
            در میان{" "}
            <span className={"text-[#B176F2] text-3xl font-bold "}>58340</span>{" "}
            دوره جستجو کنید و دوره مورد علاقه خود را بیابید
          </h1>
        </div>
        <div className="flex items-center gap-4 m-8">
          <Search
            className={"w-[100%] pr-4"}
            icon={SearchIcon}
            onSubmit={handleSearch}
          >
            <Button
              size={"sm"}
              className={"h-[80%] w-[100%] relative text-[15px] text-center"}
              onclick={toggleCategory}
            >
              دسته بندی
            </Button>
            {isClicked && (
              <div
                className={
                  "flex flex-col w-[150px] items-start  justify-center gap-2 rounded-2xl bg-[#FAFAFA] top-24 p-4 absolute "
                }
              >
                <div onClick={() => handleCategory("programing")}>
                  برنامه نویسی
                </div>
                <div onClick={() => handleCategory("graphic")}>گرافیک</div>
              </div>
            )}
          </Search>
          <p className="text-lg md:flex hidden">
            یا دوره های زیر را مشاهده کنید...
          </p>
          <img src={arrow.src} className="-scale-x-100 hidden md:flex" />
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
