import {z} from "zod";

const registerSchema = z.object({
    username: z
        .string()
        .min(4, { message: "نام کاربری باید حداقل ۴ کاراکتر باشد" }),
    password: z
        .string()
        .min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }),
    password_confirmation: z
        .string()
        .min(8, { message: "تکرار رمز عبور باید حداقل ۸ کاراکتر باشد" }),

})
    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords don't match",
        path: ["password_confirmation"], // path of error
    });
const loginSchema = z.object({
    username: z
        .string()
        .min(4, { message: "نام کاربری باید حداقل ۴ کاراکتر باشد" }),
    password: z
        .string()
        .min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }),
})

export {registerSchema,loginSchema}