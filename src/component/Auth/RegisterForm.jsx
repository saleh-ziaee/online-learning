import { z } from "zod";
import { useState } from "react";
import Input from "@/component/Ui/Input";
import Button from "@/component/Ui/Button/Button";

const registerSchema = z.object({
  username: z
    .string()
    .min(4, { message: "نام کاربری باید حداقل ۴ کاراکتر باشد" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }),
  confirm_password: z
    .string()
    .min(8, { message: "تکرار رمز عبور باید حداقل ۸ کاراکتر باشد" }),
});

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState({});

  const handleChangeLoginForm = (e) => {
    setError((s) => ({ ...s, [e.target.name]: null }));
    setRegisterForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const validation = registerSchema.safeParse(registerForm);

    if (!validation.success) {
      setError(validation.error.format());
    }

    console.log(registerForm);
  };

  console.log(error);
  return (
    <form className="flex flex-col gap-5 mt-5" onSubmit={handleRegister}>
      <Input
        name="username"
        label="نام کاربری"
        value={registerForm.username}
        onChange={handleChangeLoginForm}
        error={error.username?._errors?.[0]}
        placeholder="نام کاربری خود را وارد کنید"
      />

      <Input
        label="رمز عبور"
        type="password"
        name="password"
        value={registerForm.password}
        onChange={handleChangeLoginForm}
        error={error.password?._errors?.[0]}
        placeholder="رمز عبور انتخاب نمایید"
      />

      <Input
        type="password"
        label="تکرار رمز عبور"
        name="confirm_password"
        onChange={handleChangeLoginForm}
        value={registerForm.confirm_password}
        error={error.confirm_password?._errors?.[0]}
        placeholder="رمز عبور خود را مجدد وارد کنید"
      />

      <Button type="submit" className={"justify-center mx-auto w-full mt-4"}>
        ثبت نام
      </Button>
    </form>
  );
};

export default RegisterForm;
