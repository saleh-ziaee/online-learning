import { useState } from "react";
import Logo from "@/assets/images/Header/Group.svg";
import profileImg from "@/assets/images/Header/Profile.svg";
import notifeImg from "../../../assets/images/Header/nortife.svg";
import arrow from "../../../assets/images/Header/row.svg";
import Search from "../../Ui/SearchInput/Search.jsx";
import menuIcon from "@/assets/images/navbar/menu.png";
import Navbar from "@/component/Navbar/Navbar.jsx";
import { useAuthContext } from "@/providers/AuthProvider";
import Button from "@/component/Ui/Button/Button.jsx";
import exitIcon from "@/assets/images/sidebar/exit.svg";
import { useRouter } from "next/router";
import Link from "next/link";

function Header(props) {
  const { isLoggedIn, currentUser, logout } = useAuthContext();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [query, setQuery] = useState(() => router.query.q);

  const handleSearch = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        q: query,
      },
    });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <header
      className={
        "fixed shadow-xl top-0 mx-auto px-4 py-4 w-[100%] bg-white mb-8 left-0 right-0  z-[999999999999]"
      }
    >
      <div
        className={
          "flex items-center mx-auto justify-between w-[85%] relative gap-[40px]"
        }
      >
        <div className={"flex flex-col items-center gap-4 md:hidden"}>
          <button onClick={toggleMenu}>
            <img
              src={menuIcon}
              alt={"menu-icon"}
              className={"w-[24px] h-[24px]"}
            />
          </button>
          {isClicked && <Navbar onClick={toggleMenu}></Navbar>}
        </div>
        <div className={"flex"}>
          {
            <Link href={"/"} className={"flex items-center gap-4"}>
              <h2 className={"text-[#080808] font-black uppercase text-[32px]"}>
                academy
              </h2>
              <img src={Logo.src} alt={"logo"} />
            </Link>
          }
          <div className={"lg:flex lg:items-center hidden lg:gap-16"}>
            <div
              className={
                "cursor-pointer mr-[20px] text-[16px] text-[#080808] opacity-80"
              }
            >
              ارتباط با ما
            </div>
            <div
              className={
                "cursor-pointer min-w-fit text-[16px] text-[#080808] opacity-80"
              }
            >
              فن آوری
            </div>
            <div
              className={
                "cursor-pointer min-w-fit text-[16px] text-[#080808] opacity-80"
              }
            >
              درباره ما
            </div>
            <div
              className={
                "z-40 cursor-pointer min-w-fit text-[16px] flex items-center relative group"
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={
                  "cursor-pointer min-w-fit text-[16px]  text-[#080808] opacity-80  capitalize"
                }
              >
                دسته بندی
              </div>
              <img src={arrow.src} className="group-hover:rotate-180 transition" />
              {isHovered && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={
                    "p-[20px] flex flex-col z-[999999] transition shadow-lg items-center bg-white justify-center rounded-2xl absolute top-[25px] gap-[20px] w-100"
                  }
                >
                  <div className="nested-item text-[13px] text-[#080808BF] hover:text-primary-500">
                    Development
                  </div>
                  <div className="nested-item text-[13px] text-[#080808BF] hover:text-primary-500">
                    Development
                  </div>
                  <div className="nested-item text-[13px] text-[#080808BF] hover:text-primary-500 ">
                    Development
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={
            "md:flex md:items-center md:justify-between hidden md:gap-[40px] border-r border-[#f1f1f1] pr-10"
          }
        >
          <Search
            onSubmit={handleSearch}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={"flex gap-4 items-center  "}>
            {isLoggedIn ? (
              <>
                <div className={"border-2 p-1 rounded-2xl"}>
                  <img
                    src={profileImg}
                    alt={"profile-img"}
                    className={"cursor-pointer"}
                  />
                </div>
                <div className={"flex flex-col items-center gap-4"}>
                  {/*<span className={"text-dark"}>Behzad pashaei</span>*/}
                  {/*<span className={"text-dark opacity-80"}>ui & ux designer</span>*/}
                </div>
                <div
                  onClick={logout}
                  className={
                    "cursor-pointer flex items-center justify-center bg-red-100 border-2 border-red-400 rounded-2xl w-[70px] h-[70px]"
                  }
                >
                  <img className={"w-[45%]"} src={exitIcon} />
                </div>
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

            <div
              className={
                "cursor-pointer flex items-center justify-center bg-[#9E5CF20D] border-2 rounded-2xl w-[70px] h-[70px]"
              }
            >
              <img src={notifeImg.src} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
