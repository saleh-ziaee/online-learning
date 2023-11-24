import cx from "clsx";
import Sidebar from "@/component/Sidebar/Sidebar";
import React, {useState} from "react";
import menuIcon from "@/assets/images/navbar/menu.png";
import userImg from "@/assets/images/Header/Profile.svg";
import notifeIcon from "@/assets/images/Header/nortife.svg";
import {useAuthContext} from "@/providers/AuthProvider";

function ProfileLayout({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {currentUser, isLoading} = useAuthContext()

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className={"md:flex w-full bg-[#F3F5FF] mx-auto relative min-h-screen"}>
            <Sidebar
                className={cx(
                    '-right-full w-1/3 fixed transition-all top-0 bottom-0 z-30 md:relative md:right-0',
                    isSidebarOpen ? '!right-0' : ''
                )}
                onClose={toggleMenu}
            />

            <div className={"bg-[#F3F5FF] flex-col w-full h-full"}>
                <header className={"flex md:items-start items-center p-4 justify-between w-full border-b-2"}>
                    <button onClick={toggleMenu} className={"md:hidden block"}>
                        <img src={menuIcon.src} alt={"menu-icon"} className={"w-[24px] h-[24px]"}/>
                    </button>
                    <div className={"flex items-center justify-center gap-4"}>
                        <img src={userImg.src} alt={"user-image"}/>
                        <span className={"text-dark"}>
                            {isLoading ? '...' : currentUser?.username}
                        </span>
                    </div>
                    <div
                        className={"flex items-center justify-center rounded-xl bg-[#9E5CF20D] w-[64px] h-[64px]"}>
                        <img src={notifeIcon.src} alt={"notife- icon"}/>
                    </div>
                </header>

                <div className="w-full overflow-y-scroll h-[calc(100vh-98px)]">
                    {children}
                </div>
            </div>


        </div>
    );
}

export default ProfileLayout;