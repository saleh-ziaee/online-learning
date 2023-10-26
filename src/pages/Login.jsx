import React from 'react';
import loginpic from "../assets/images/login/loginpic.svg"
import Button from "@/component/Ui/Button/Button.jsx";

function Login(props) {
    return (
        <div className={"container w-[85%] mx-auto flex justify-between"}>
            <div className={"flex flex-col justify-center"}>
<span>
    خوش آمدید  👋
</span>
                <span>
                    امروز یه روز جدیده، و روز شماست. روز خود را با
                </span>
                <span>ورود و یادگیری به آکادمی بسازید.</span>
<Button className={"text-center mx-auto"}>
    <span className={"mx-auto"}>
    ورود
</span>
</Button>
                <div className={"text-center"}>
                      <span>
                    حساب کاربری ندارید ؟
                </span>
                </div>


            </div>
            <div>
                <img className={"h-[800px] w-[800px]"} src={loginpic} alt=""/>
            </div>

        </div>
    );
}

export default Login;