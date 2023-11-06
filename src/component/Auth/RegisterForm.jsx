import { useState } from "react";
import Input from "@/component/Ui/Input";
import Button from "@/component/Ui/Button/Button";
import axios from "axios";
import { useAuthContext } from "@/providers/AuthProvider";

import {registerSchema}  from "./schema.js"
import {useNavigate} from "react-router";

const RegisterForm = () => {
    const navigate = useNavigate()
    const { saveAccessToken } = useAuthContext();
    const [unlnowError, setUnknownError] = useState(null);
    const [loading, setLoading] = useState(false);
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

  const handleRegister = async (event) => {
    event.preventDefault();

      if (loading) return;

      setUnknownError(null);

      const { success, error, data } = registerSchema.safeParse(registerForm);

      if (!success) {
          setError(error.flatten().fieldErrors);
          return;
      }
      try {
          setLoading(true);

          const result = await axios.post(
              "http://demo2578450.mockable.io/auth/register",
              data
          );

          navigate("/")
          saveAccessToken(result.data.token.accessToken);
      } catch (error) {
          console.log(error);
          setUnknownError("Something wrong, please try again.");
      } finally {
          setLoading(false);
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
        error={error.username?.[0]}
        placeholder="نام کاربری خود را وارد کنید"
      />

      <Input
        label="رمز عبور"
        type="password"
        name="password"
        value={registerForm.password}
        onChange={handleChangeLoginForm}
        error={error.password?.[0]}
        placeholder="رمز عبور انتخاب نمایید"
      />

      <Input
        type="password"
        label="تکرار رمز عبور"
        name="confirm_password"
        onChange={handleChangeLoginForm}
        value={registerForm.confirm_password}
        error={error.confirm_password?.[0]}
        placeholder="رمز عبور خود را مجدد وارد کنید"
      />

      <Button type="submit" className={"justify-center mx-auto w-full mt-4"}>
        ثبت نام
      </Button>
    </form>
  );
};

export default RegisterForm;
