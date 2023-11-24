import {useId, useState} from "react";
import Input from "@/component/Ui/Input";
import Button from "@/component/Ui/Button/Button";
import {loginSchema, registerSchema} from "@/component/Auth/schema";
import {apiLoginUSer, apiRegisterUSer} from "@/api/user";
import {useAuthContext} from "@/providers/AuthProvider";
import {useRouter} from "next/router";
import Toast from "@/component/Toast/Toast";
import toast, {Toaster} from "react-hot-toast";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [unlnowError, setUnknownError] = useState(null);
    const { saveAccessToken } = useAuthContext();
    const [error, setError] = useState({});
    const router = useRouter();
    const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChangeLoginForm = (e) => {

    setLoginForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

      // if (loading) return;
      setUnknownError(null);
      const { success, error, data } = loginSchema.safeParse(loginForm);

      // console.log(LoginForm)
      if (!success) {

          setError(error.flatten().fieldErrors);
          console.log(data)

          return;
      }
      try {
          setLoading(true);
          const result = await apiLoginUSer(data)
          // const result2 = await axios.post(
          //     "http://demo2578450.mockable.io/auth/register",
          //     data
          // );
          router.push("/")
          console.log(result.token)
          saveAccessToken(result.token);
      } catch (error) {
          console.log(error);
          setUnknownError("Something wrong, please try again.");
          if (error.response.status===401){
              toast.error("نام کاربری یا رمز عبور صحیح نمی باشد ")
          }
      } finally {
          setLoading(false);
      }
  };

  return (


    <form className="flex flex-col gap-5 mt-5" onSubmit={handleLogin}>
      <Input
        name="username"
        label="نام کاربری"
        value={loginForm.username}
        onChange={handleChangeLoginForm}
        error={error.username?.[0]}
        placeholder="نام کاربری خود را وارد کنید"
      />

      <Input
        label="رمز عبور"
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleChangeLoginForm}
        error={error.password?.[0]}

        placeholder="رمز عبور خود را وارد کنید"
      />

      <Button type="submit" className={"justify-center mx-auto w-full mt-4"}>
        ورود
      </Button>
    </form>


  );
};

export default LoginForm;
