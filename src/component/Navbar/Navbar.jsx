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

function Navbar({ onClick }) {
  const { isLoggedIn, currentUser, logout } = useAuthContext();

  const [isClicked, setIsClicked] = useState(true);
  const closeNav = () => {
    setIsClicked(false);
  };
  return (
    <nav
      role="navigation "
      className={
        styles.navigation +
        " navigation bg-white h-[100vh] absolute right-0 top-0 z-50 w-[80%]"
      }
    >
      <div id="menuToggle" className={"flex flex-col items-center  gap-4"}>
        <div
          className={
            "flex gap-4 px-4 w-full justify-between items-center cursor-pointer "
          }
        >
          <img
            src={closeIcon.src}
            className={"w-[10%] cursor-pointer"}
            onClick={onClick}
          />
          <div className={"flex justify-between gap-2"}>
            {isLoggedIn ? (
              <>
                <img
                  src={profileImg}
                  alt={"profile-img"}
                  className={"cursor-pointer"}
                />
                <div className={"flex flex-col items-center gap-4"}>
                  {/*<span className={"text-dark"}>Behzad pashaei</span>*/}
                  {/*<span className={"text-dark opacity-80"}>ui & ux designer</span>*/}
                </div>
                <Button variant="fill" onClick={logout}>
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
