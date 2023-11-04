import React, {useState} from 'react';
import userIcon from "@/assets/images/sidebar/user.svg"
import bookIcon from "@/assets/images/sidebar/book.svg"
import settigIcon from "@/assets/images/sidebar/setting.svg"
import logo from "@/assets/images/logo.svg"
import exitIcon from "@/assets/images/sidebar/exit.svg"
import notifeImg from "@/assets/images/Header/nortife.svg";
import closeIcon from "@/assets/images/navbar/XCircle.svg";

function Sidebar({className,onClick, ...props}) {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className={`${className} top-0 right-0  h-full overflow-y-auto overflow-x-hidden`}>
        <div className={` bg-gray w-[100%] bg-white h-[100%] flex  flex-col items-start`}>
            <div className={"mt-4 flex items-center justify-between w-[90%]"}>
            <img src={logo} className={"w-[180px] md:w-fit"}/>
                <button onClick={onClick} className={"min-w-fit"}>
                    <img src={closeIcon}/>
                </button>
            </div>
            <div className={"flex flex-col items-start gap-[16px] mt-[40px]"}>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={bookIcon}/>
                    <p className={"text-[16px] text-gary-700"}>دوره‌های من</p>
                </div>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={userIcon}/>
                    <p className={"text-[16px] text-gary-700"}>پروفایل</p>
                </div>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={settigIcon}/>
                    <p className={"text-[16px] text-gary-700"}>تنظیمات</p>
                </div>
                <div className={"flex items-center gap-4 cursor-pointer mr-4 w-[100%]"}>
                    <img src={exitIcon}/>
                    <p className={"text-[16px] text-gary-700"}>خروج</p>
                </div>
            </div>
        </div>
        </div>

    );
}

export default Sidebar;