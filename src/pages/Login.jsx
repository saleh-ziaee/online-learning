import loginpic from "../assets/images/login/loginpic.svg";
import Button from "@/component/Ui/Button/Button.jsx";
import Input from "@/component/input-login/Input.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChangeLoginForm = (e) => {
    setLoginForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(loginForm);
  };

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

        <form className="flex flex-col gap-5 mt-5" onSubmit={handleLogin}>
          <Input
            name="username"
            label="نام کاربری"
            value={loginForm.username}
            onChange={handleChangeLoginForm}
            placeholder="نام کاربری خود را وارد کنید"
          />

          <Input
            label="رمز عبور"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChangeLoginForm}
            placeholder="رمز عبور خود را وارد کنید"
          />

          <Button
            type="submit"
            className={"justify-center mx-auto w-full mt-4"}
          >
            ورود
          </Button>
        </form>

        <div className={"text-center mt-5"}>
          <Link> آیا حساب کاربری ندارید ؟ ثبت نام کنید</Link>
        </div>
      </div>

      <div>
        <img className={"h-[800px] w-[800px]"} src={loginpic} alt="" />
      </div>
    </div>
  );
}

export default Login;
