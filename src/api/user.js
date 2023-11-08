import {apiClient} from "@/api/request.js";

const apiRegisterUSer =(data) => {
    return apiClient.post("./auth/register",data)
}
const apiLoginUSer =(data) => {
    return apiClient.post("./auth/login",data)
}
const apiGetCurrentUSer =() => {
    return apiClient.get("./auth/me")
}
export {apiRegisterUSer, apiLoginUSer, apiGetCurrentUSer}
