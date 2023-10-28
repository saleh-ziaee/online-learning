import React from 'react';
import userIcon from "@/assets/images/sidebar/user.svg"
import bookIcon from "@/assets/images/sidebar/book.svg"
import settigIcon from "@/assets/images/sidebar/setting.svg"
import logo from "@/assets/images/logo.svg"
import exitIcon from "@/assets/images/sidebar/exit.svg"
function Sidebar(className,...props) {
    return (
        <div className={" top-0 right-0  h-full overflow-y-auto"}>
        <div className={`${className} bg-gray w-[100%] bg-white h-[100%] flex  flex-col items-start`}>
            <div className={"mt-4"}>
            <img src={logo}/>
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