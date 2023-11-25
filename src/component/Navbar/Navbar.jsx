import React, { useState } from "react";
// import "./Navbar.css"
import profileImg from "@/assets/images/Header/Profile.svg";
import notifeImg from "@/assets/images/Header/nortife.svg";
import Search from "@/component/Ui/SearchInput/Search.jsx";
import closeIcon from "@/assets/images/navbar/XCircle.svg";
import Button from "@/component/Ui/Button/Button.jsx";
import { useAuthContext } from "@/providers/AuthProvider.jsx";
import exitIcon from "@/assets/images/sidebar/exit.svg";
import styles from "./Navbar.module.css";
import Link from "next/link";
import cx from 'clsx'
import userIcon from "@/assets/images/Header/User.png"
import Logo from "@/assets/images/Header/Group.svg";


function Navbar({ className,onClick ,isOpen, onClose}) {
  const { isLoggedIn, currentUser, logout } = useAuthContext();
  const handleClose = () => {
    onClose?.()
  }
  const [isClicked, setIsClicked] = useState(true);
  const closeNav = () => {
    setIsClicked(false);
  };
  return (
    <nav
      role="navigation "
      className={cx(className)}
    >
      <img
          src={closeIcon.src}
          className={"w-[10%] cursor-pointer absolute left-4 top-2"}
          onClick={handleClose}
      />
      <div id="menuToggle" className={"flex flex-col items-center  gap-4 mt-8"}>
        <Link href={"/"} className={"flex items-center gap-4"}>
          <h2 className={"text-[#080808] font-black uppercase text-[32px]"}>
            academy
          </h2>
          <img src={Logo.src} alt={"logo"} />
        </Link>
        <Search/>
        <div
          className={
            "flex gap-4 px-4 w-full justify-between items-center cursor-pointer "
          }
        >

          <div className={"flex justify-between gap-2 mx-auto items-center"}>
            {isLoggedIn ? (
              <>
                <Link href={"/profile"}>

                <img
                  src={userIcon.src}
                  alt={"profile-img"}
                  className={"cursor-pointer "}
                />
                </Link>

                <div className={"flex flex-col items-center gap-4"}>
                  {/*<span className={"text-dark"}>Behzad pashaei</span>*/}
                  {/*<span className={"text-dark opacity-80"}>ui & ux designer</span>*/}
                </div>
                <Button variant="fill" size={"sm"} onClick={logout}>
                  <img src={exitIcon.src} alt="" />
                </Button>
              </>
            ) : (
              <div className="ml-auto">
                <Link href="/Login">
                  <Button size="sm" variant="outline">
                    ثبت نام / ورود
                  </Button>
                </Link>
              </div>
            )}
            {/*<div className={"flex flex-col items-center gap-4"}>*/}
            {/*    <span className={"text-dark"}>Behzad pashaei</span>*/}
            {/*    <span className={"text-dark opacity-80"}>ui & ux designer</span>*/}
            {/*</div>*/}
            {}
            <div
              className={
                "cursor-pointer flex items-center justify-center bg-[#9E5CF20D] rounded-[12px] w-[64px] h-[64px]"
              }
            >
              <img src={notifeImg.src} />
            </div>
          </div>
        </div>


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
