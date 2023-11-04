import {z} from "zod";

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

})
    .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // path of error
});
export {registerSchema}