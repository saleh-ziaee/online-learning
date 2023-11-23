import React, {useState} from 'react';
import userIcon from "@/assets/images/sidebar/user.svg"
import bookIcon from "@/assets/images/sidebar/book.svg"
import settigIcon from "@/assets/images/sidebar/setting.svg"
import logo from "@/assets/images/logo.svg"
import exitIcon from "@/assets/images/sidebar/exit.svg"
import notifeImg from "@/assets/images/Header/nortife.svg";
import closeIcon from "@/assets/images/navbar/XCircle.svg";
import Link from 'next/link';
import { animated } from '@react-spring/web';
function Sidebar({className,onClick,isOpen ,...props}) {

    return (

        <div className={`${className} transition-transform transform left-0  h-full overflow-y-auto overflow-x-hidden${isOpen ? 'translate-x-0' : 'translate-x-full'
        }  top-0 right-0 h-full overflow-y-auto overflow-x-hidden`}>
        <div className={` bg-gray w-[100%] bg-white h-[100%] flex  flex-col items-start`}>
            <div className={"mt-4 flex items-center justify-between w-[90%]"}>
                <Link href={"/"}>
                    <img src={logo.src} className={"w-[180px] md:w-fit"}/>
                </Link>
                <button onClick={onClick} className={"min-w- md:hidden"}>
                    <img src={closeIcon.src}/>
                </button>
            </div>
            <div className={"flex flex-col items-start gap-[30px] mt-20"}>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={bookIcon.src}/>
                    <p className={"text-[16px] text-gary-700"}>دوره‌های من</p>
                </div>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={userIcon.src}/>
                    <p className={"text-[16px] text-gary-700"}>پروفایل</p>
                </div>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={settigIcon.src}/>
                    <p className={"text-[16px] text-gary-700"}>تنظیمات</p>
                </div>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={exitIcon.src}/>
                    <p className={"text-[16px] text-red-700"}>خروج</p>
                </div>
            </div>

        </div>
        </div>


    );
}

export default Sidebar;