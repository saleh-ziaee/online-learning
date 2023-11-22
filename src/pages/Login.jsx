import { useState } from "react";
import LoginForm from "@/component/Auth/LoginForm";
import loginpic from "../assets/images/login/loginpic.svg";
import RegisterForm from "@/component/Auth/RegisterForm";



function Login() {
  const [mode, setMode] = useState("login");

  return (
    <div
      className={
        "container w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between"
      }
    >
      <div className={"flex flex-col justify-center"}>
        <span className={"font-bold text-3xl"}>خوش آمدید 👋</span>
        <span className={"mt-5"}>
          امروز یه روز جدیده، و روز شماست. روز خود را با ورود و یادگیری به
          آکادمی بسازید.
        </span>

        {mode === "login" ? <LoginForm /> : <RegisterForm />}

        <div className={"text-center mt-5"}>
          {mode === "login" ? (
            <button onClick={() => setMode("singUp")}>
              آیا حساب کاربری ندارید ؟ ثبت نام کنید
            </button>
          ) : (
            <button onClick={() => setMode("login")}>
              حساب کاربری دارید؟ ورود کنید
            </button>
          )}
        </div>
      </div>

      <div>
        <img className={"h-[400px] w-[400px] md:w-[800px] md:h-[800px]"} src={loginpic.src} alt="" />
      </div>
    </div>
  );
}

export default Login;
