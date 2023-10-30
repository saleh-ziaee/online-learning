import React from 'react';
// import "./Navbar.css"
import profileImg from "@/assets/images/Header/Profile.svg";
import notifeImg from "@/assets/images/Header/nortife.svg";
import Search from "@/component/Ui/SearchInput/Search.jsx";
function Navbar(props) {
    return (
        <nav className="menu--left w-[80%]" role="navigation">
            <div className="flex flex-col gap-4 text-center items-center w-[100%]">
                <div className={"flex gap-4 items-center  "}>
                    <img src={profileImg} alt={"profile-img"} className={"cursor-pointer"}/>

                    <div className={"flex flex-col items-center gap-4"}>
                        <span className={"text-dark"}>Behzad pashaei</span>
                        <span className={"text-dark opacity-80"}>ui & ux designer</span>
                    </div>

                </div>
                <div className={"cursor-pointer flex items-center justify-center bg-[#9E5CF20D] rounded-[12px] w-[64px] h-[64px]"}>
                    <img src={notifeImg}/>
                </div>
                <Search></Search>

                <ul className="menuItem gap-4 ">
                    <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
                    <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
                    <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
                    <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
                    <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;