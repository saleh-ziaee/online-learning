import React, {useState} from 'react';
import Logo from "@/assets/images/Header/Group.svg"
import profileImg from "@/assets/images/Header/Profile.svg"
import notifeImg from "../../assets/images/Header/nortife.svg"
import arrow from "../../assets/images/Header/row.svg"
import "./Header.css"
import Search from "../Ui/SearchInput/Search.jsx";
import {Link} from "react-router-dom";
function Header(props) {
        const [isHovered, setIsHovered] = useState(false)
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };
    return (
        <header className={"fixed top-8 mx-auto w-[100%]"}>
            <div className={"flex items-center mx-auto justify-center w-100  gap-[40px]"}>
                <div className={"flex"}>
                            <Link to={"/"} className={"flex items-center gap-4"}>
                            <h2 className={"text-[#080808] font-black uppercase text-[32px]"}>academy</h2>
                            <img src={Logo} alt={"logo"}/>
                            </Link>

                    <div className={"flex items-center gap-8"}>
                        <div className={"cursor-pointer mr-[20px] text-[16px] text-[#080808] opacity-80"}>ارتباط با ما</div>
                        <div className={"cursor-pointer text-[16px] text-[#080808] opacity-80"}>فن آوری</div>
                        <div className={"cursor-pointer text-[16px] text-[#080808] opacity-80"}>درباره ما</div>
                        <div className={"cursor-pointer text-[16px] flex items-center category relative"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className={"cursor-pointer text-[16px]  text-[#080808] opacity-80 text-[16px] capitalize"}>
                                دسته بندی
                            </div>
                            <img src={arrow} className={"arrow"}/>
                            {
                                isHovered&&(
                                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={"p-[20px] flex flex-col nested-category__section items-center justify-center absolute top-[25px] gap-[20px] w-100"}>
                                        <div className="nested-item text-[13px] text-[#080808BF] opacity-75">Development</div>
                                        <div className="nested-item text-[13px] text-[#080808BF] opacity-75">Development</div>
                                        <div className="nested-item text-[13px] text-[#080808BF] opacity-75">Development</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className={"flex items-center justify-between left-header gap-[40px]"}>
                    <Search></Search>
                    <div className={"flex gap-4 items-center "}>
                        <img src={profileImg} alt={"profile-img"} className={"cursor-pointer"}/>
                        <div className={"flex flex-col items-center gap-4"}>
                            <span className={"text-[#080808]"}>Behzad pashaei</span>
                            <span className={"text-[#080808] opacity-80"}>ui & ux designer</span>
                        </div>
                        <div className={"cursor-pointer flex items-center justify-center bg-[#9E5CF20D] rounded-[12px] w-[64px] h-[64px]"}>
                            <img src={notifeImg}/>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;