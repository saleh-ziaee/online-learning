import React from "react";
import styles from "./Title.module.css";
// import banerpic from "../../assets/images/baner/banerpic.png"
import classroom from "../../assets/images/baner/classroom.svg";
import Button from "@/component/Ui/Button/Button.jsx";
import chart from "../../assets/images/baner/chart.png";
import nextIcon from "@/assets/icon/next.svg";
import arrow from "@/assets/icon/arrows.svg";
function Title(props) {
  return (
    <div>
      <div
        className={
          "md:flex md:flex-row flex flex-col-reverse justify-between mt-2 items-center font-bold"
        }
      >
        <div
          className={
            "flex flex-col w-[100%] md:me-[150px] leading-loose md:text-[30px] text-2xl"
          }
        >
          <div
            className={
              styles.typing_demo +
              " text-gray-800 w-[95%] md:w-full md:text-[40px] text-[25px]"
            }
          >
            ما به هر قیمتی دوره تولید نمی کنیم!
          </div>
          <div>
            <span className={"text-gray-500 text-[18px] md:text-2xl"}>
              {" "}
              یادگیری آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته باشید، بقیه‌اش
              با ما :)
            </span>
          </div>
          <div
            className={"mt-14 md:mt-20 mx-auto w-[75%] md:mx-auto text-center"}
          >
            {/*<Button size={"sm"} className={"mx-auto"}><img  src={nextIcon}  className={""}/><span className={"text-xl md:text-2xl"}>از اینجا شروع کن</span></Button>*/}
            <button
              className={"button-53 mx-auto md:w-[75%] w-[80%] font-bold"}
              role="button"
            >
              {" "}
              همین حالا شروع کنید!
            </button>
          </div>
        </div>
        <img className={"w-full md:w-[50%]"} src={classroom.src} alt="" />
      </div>
    </div>
  );
}

export default Title;
