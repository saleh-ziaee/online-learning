import React from 'react';
import loginpic from "../assets/images/login/loginpic.svg"
import Button from "@/component/Ui/Button/Button.jsx";
import Input from "@/component/input-login/Input.jsx";
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div className={"container w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between"}>
            <div className={"flex flex-col justify-center"}>
<span className={"font-bold text-3xl"}>
    خوش آمدید  👋
</span>
                <span className={"mt-5"}>
                    امروز یه روز جدیده، و روز شماست. روز خود را با
                </span>
                <span>ورود و یادگیری به آکادمی بسازید.</span>
                <div>

                    <div className={"mt-5"}>
                        <span>نام کاربری</span>
                        <Input></Input>
                    </div>
                    <div className={"mt-5"}>
                        <span>رمز عبور</span>
                        <Input></Input>
                    </div>
                </div>
                <div className={"mt-10"}>
                    <Button className={"text-center mx-auto"}>
                        <span className={"mx-auto"}>
    ورود
                        </span>
                    </Button>
                </div>

                <div className={"text-center mt-5"}>

<Link> آیا حساب کاربری ندارید ؟ ثبت نام کنید</Link>

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