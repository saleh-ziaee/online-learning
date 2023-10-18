import React from 'react';
import Logo from "../../assets/images/Header/Group.svg"
function Header(props) {
    return (
        <div className={"flex"}>
            <div className={""}>
                <div className={"flex items-center gap-4"}>
                    <img src={Logo}/>
                    <h2 className={"text-[#080808] font-black uppercase"}>academy</h2>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Header;