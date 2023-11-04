import {useId, useState} from "react";
import Input from "@/component/Ui/Input";
import Button from "@/component/Ui/Button/Button";


const LoginForm = () => {
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

      <Button type="submit" className={"justify-center mx-auto w-full mt-4"}>
        ورود
      </Button>
    </form>
  );
};

export default LoginForm;
