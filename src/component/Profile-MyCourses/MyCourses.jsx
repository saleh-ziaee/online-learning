import React, {useState} from 'react';
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import Sidebar from "@/component/Sidebar/Sidebar.jsx";
import userImg from "@/assets/images/Header/Profile.svg";
// import "./MyCourses.css"
import notifeIcon from "@/assets/images/Header/nortife.svg"
import menuIcon from "@/assets/images/navbar/menu.png";
import Navbar from "@/component/Navbar/Navbar.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
function MyCourses(props) {
    const [isClicked, setIsClicked] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <div className={"md:flex  md:items-center bg-[#F3F5FF] h-[100vh] relative md:overflow-hidden"}>
            {
                isSidebarOpen&&(
                    <Sidebar onClick={toggleMenu} isOpen={!isSidebarOpen}  className={"flex z-50 absolute right-0 top-0 w-[60%] md:hidden"}></Sidebar>
                )
            }
            <Sidebar className={"md:flex  md:basis-1/5 hidden"} isOpen={!isSidebarOpen} />
        <div className={"bg-[#F3F5FF]  flex-col basis-4/5 h-full"}>
            <header className={"flex md:items-start items-center p-4 justify-between w-full "}>
                <button onClick={toggleMenu } className={"md:hidden block"}>
                    <img src={menuIcon.src} alt={"menu-icon"} className={"w-[24px] h-[24px]"}/>
                </button>
                <div className={"flex items-center justify-center gap-4"}>
                    <img src={userImg.src} alt={"user-image"}/>
                    <span className={"text-dark"}> بهزاد پاشایی</span>
                </div>
                <div className={"flex items-center justify-center rounded-xl bg-[#9E5CF20D] w-[64px] h-[64px]"}>
                    <img src={notifeIcon.src} alt={"notife- icon"}/>
                </div>
            </header>
            <div className={
                " coursesSection flex flex-col items-center justify-center w-full  mx-auto mt-5 pb-24 scrollNone  md:h-[100vh] md:overflow-scroll md:pb-24 md:justify-start  flex-wrap md:scrollNone"}>
                {/*<h2>دوره های من</h2>*/}
                <CardTwo/>
            </div>
        </div>
        </div>

    );
}

export default MyCourses;