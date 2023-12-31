import React from "react";
import logo from "../../../assets/images/footer/logo.svg";
import imagef from "../../../assets/images/footer/bigImage.svg";
import enamad from "@/assets/images/footer/enamad.png";
import samandehi from "@/assets/images/footer/samandehi.png";
import FooterCommentBox from "@/component/FooterCommentBox/FooterCommentBox";
import Link from "next/link";

function Footer(props) {
  const commentList = [{ title: "ali", subtitle: "سایت بسیار خوبی است" },];
  return (
    <div className={"all w-[100%] mx-auto mt-8 pb-8"}>
      <div
        className={
          "flex md:flex-row flex-col-reverse md:justify-between md:flex"
        }
      >
        <div
          className={
            "bg-secondary-500 w-full mt-5 md:mt-0 p-5 rounded-[50px] md:w-[85%]"
          }
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
          بیشتری را برای طراحان حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </div>
        <div className={"md:mx-0 mx-auto"}>
          <img src={logo.src} alt={"logo"} />
        </div>
      </div>
      <div
        className={
          "flex flex-col mx-auto md:mx-0 mt-[60px] justify-between md:flex md:flex-row gap-20"
        }
      >
        <div className={"md:flex flex justify-center md:flex-row gap-10 md:gap-5 border-l-2 pl-10"}>
            <div className={"flex flex-row items-center gap-2"}>
                <div
                    className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}
                ></div>
                <span className={"font-bold whitespace-nowrap"}>دوره های آموزشی</span>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
                <div
                    className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}
                ></div>
                <span className={"font-bold"}>جستجو</span>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
                <div
                    className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}
                ></div>
                    <span className={"font-bold whitespace-nowrap"}>ارتباط با ما</span>
            </div>
        </div>
          <div className={"md:flex flex justify-center md:flex-row px-3 gap-10 items-center"}>
              <div className={"border-2 rounded-2xl"}>
                  <img src={enamad.src} alt=""/>
              </div>
              <div className={"border-2 px-3 rounded-2xl"}>
                  <img className={"w-[110px]"} src={samandehi.src} alt=""/>
              </div>
          </div>
        {/*<div className={"section1-footer w-full md:w-[30%]"}>*/}
        {/*  <div className={"flex items-center"}>*/}
        {/*    <div*/}
        {/*      className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}*/}
        {/*    ></div>*/}
        {/*    <span className={"text-black ms-3 font-bold text-[20px]"}>*/}
        {/*      گواهی عضویت*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*  <div className={"mt-[30px]"}>*/}
        {/*    <img src={imagef.src} alt={"image"} />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={"section2-footer md:ms-[50px] w-full md:w-[15%]"}>*/}
        {/*  <div className={"flex items-center"}>*/}

        {/*    <span className={"text-black ms-3 font-bold text-[20px]"}>*/}
        {/*      دسته بندی*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*  <div className={"flex flex-col gap-2"}>*/}
        {/*    <span className={"mt-5"}>طراحی</span>*/}
        {/*    <span>برنامه نویسی</span>*/}
        {/*    <span>گرافیک</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={"section3-footer ms-[50px] w-[15%]"}>*/}
        {/*  <div className={"flex items-center"}>*/}
        {/*    <div*/}
        {/*      className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}*/}
        {/*    ></div>*/}
        {/*    <span className={"text-black ms-3 font-bold text-[20px]"}>*/}
        {/*      دسته بندی*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*  <div className={"flex flex-col gap-2"}>*/}
        {/*    <span className={"mt-5"}>طراحی</span>*/}
        {/*    <span>برنامه نویسی</span>*/}
        {/*    <span>گرافیک</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*    <span>فرانت اند</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={"w-[35%]"}>
          <div className={"flex items-center"}>
            <div
              className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}
            ></div>
            <span className={"text-black ms-3 font-bold text-[20px]"}>
              نظرات جدید
            </span>
          </div>

          {commentList.map((comment)=>{
            return <FooterCommentBox title={comment.title} subtitle={comment.subtitle} />}
          )}
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
