import React from 'react';
import userIcon from "@/assets/images/sidebar/user.svg"
import bookIcon from "@/assets/images/sidebar/book.svg"
import settigIcon from "@/assets/images/sidebar/setting.svg"
import logo from "@/assets/images/logo.svg"
import exitIcon from "@/assets/images/sidebar/exit.svg"
import closeIcon from "@/assets/images/navbar/XCircle.svg";
import Link from 'next/link';
import cx from 'clsx'
import ActiveLink from "@/component/Ui/ActiveLink";

function Sidebar({className, isOpen, onClose, ...props}) {

    const handleClose = () => {
        onClose?.()
    }

    return (
        <div
            className={cx(className)}
        >
            <div className={`bg-gray w-[100%] bg-white h-[100%] flex flex-col items-start`}>
                <div className={"mt-4 flex items-center justify-between w-[90%]"}>
                    <Link href={"/"}>
                        <img src={logo.src} className={"w-[180px] md:w-fit"}/>
                    </Link>
                    <button onClick={handleClose} className={"md:hidden"}>
                        <img src={closeIcon.src}/>
                    </button>
                </div>
                <div className={"w-full flex flex-col gap-1 mt-20"}>
                    <ActiveLink
                        href={'/profile'}
                        className={"flex items-center gap-4 cursor-pointer w-[100%] px-4 py-4"}
                        activeClassName={"bg-purple-300"}
                    >
                        <img src={bookIcon.src}/>
                        <p className={"text-[16px] text-gary-700"}>دوره‌های من</p>
                    </ActiveLink>
                    <div className={"flex items-center gap-4 cursor-pointer w-[100%] px-4 py-4"}>
                        <img src={userIcon.src}/>
                        <p className={"text-[16px] text-gary-700"}>پروفایل</p>
                    </div>
                    <div className={"flex items-center gap-4 cursor-pointer w-[100%] px-4 py-4"}>
                        <img src={settigIcon.src}/>
                        <p className={"text-[16px] text-gary-700"}>تنظیمات</p>
                    </div>
                    <div className={"flex items-center gap-4 cursor-pointer w-[100%] px-4 py-4"}>
                        <img src={exitIcon.src}/>
                        <p className={"text-[16px] text-red-700"}>خروج</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;