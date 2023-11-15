import React, {useState} from 'react';
// import "./Navbar.css"
import profileImg from "@/assets/images/Header/Profile.svg";
import notifeImg from "@/assets/images/Header/nortife.svg";
import Search from "@/component/Ui/SearchInput/Search.jsx";
import closeIcon from "@/assets/images/navbar/XCircle.svg"
import {Link} from "react-router-dom";
import Button from "@/component/Ui/Button/Button.jsx";
import {useAuthContext} from "@/providers/AuthProvider.jsx";

function Navbar( {onClick}) {
    const { isLoggedIn, currentUser, logout } = useAuthContext();

    const [isClicked, setIsClicked] = useState(true)
    const closeNav=()=>{
        setIsClicked(false)
    }
    return (
        // <nav className="menu--left w-[80%] relative" role="navigation">
        //     <div className="flex flex-col gap-4 text-center items-center w-[100%] absolute left-0 top-0">
        //         <div className={"flex gap-4 items-center  "}>
        //             <img src={profileImg} alt={"profile-img"} className={"cursor-pointer"}/>
        //
        //             <div className={"flex flex-col items-center gap-4"}>
        //                 <span className={"text-dark"}>Behzad pashaei</span>
        //                 <span className={"text-dark opacity-80"}>ui & ux designer</span>
        //             </div>
        //
        //         </div>
        //         <div className={"cursor-pointer flex items-center justify-center bg-[#9E5CF20D] rounded-[12px] w-[64px] h-[64px]"}>
        //             <img src={notifeImg}/>
        //         </div>
        //         <Search></Search>
        //
        //         <ul className="menuItem gap-4 ">
        //             <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
        //             <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
        //             <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
        //             <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
        //             <li className={"cursor-pointer  text-[16px] text-[#080808] opacity-80"}><a href="#">خانه</a></li>
        //         </ul>
        //     </div>
        // </nav>

        <nav role="navigation " className={"navigation bg-white h-[100vh] absolute right-0 top-0 z-50 w-[80%]"}>
            <div id="menuToggle" className={"flex flex-col items-center gap-4"}>

                <div className={"flex gap-4 px-4 w-full justify-between items-center cursor-pointer "}>
                    <img src={closeIcon} className={"w-[10%] cursor-pointer"} onClick={onClick}/>
<div className={"flex justify-between gap-2"}>

                    {isLoggedIn ? (
                        <>

                            <img src={profileImg} alt={"profile-img"} className={"cursor-pointer"}/>
                            <div className={"flex flex-col items-center gap-4"}>
                                {/*<span className={"text-dark"}>Behzad pashaei</span>*/}
                                {/*<span className={"text-dark opacity-80"}>ui & ux designer</span>*/}
                            </div>
                            <Button variant="fill" onClick={logout}>
                                خروج از حساب
                            </Button>
                        </>
                    ): (
                        <div className="ml-auto">
                            <Link to="/Login">
                                <Button size="sm" variant="outline">
                                    ثبت نام  / ورود
                                </Button>
                            </Link>
                        </div>
                    )}
                    {/*<div className={"flex flex-col items-center gap-4"}>*/}
                    {/*    <span className={"text-dark"}>Behzad pashaei</span>*/}
                    {/*    <span className={"text-dark opacity-80"}>ui & ux designer</span>*/}
                    {/*</div>*/}
                    {


                    }
                    <div
                        className={"cursor-pointer flex items-center justify-center bg-[#9E5CF20D] rounded-[12px] w-[64px] h-[64px]"}>
                        <img src={notifeImg}/>
                    </div>
</div>

                </div>

                <Search></Search>
                <ul id="menu" className={"flex flex-col items-center gap-4"}>
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Info</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                    <a href="https://erikterwan.com/" target="_blank">
                        <li>Show me more</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;