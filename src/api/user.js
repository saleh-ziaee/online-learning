import {apiClient} from "@/api/request.js";

const apiRegisterUSer =(data) => {
    return apiClient.post("/register",data)
}
const apiLoginUSer =(data) => {
    return apiClient.post("/login",data)
}
const apiGetCurrentUSer =() => {
    return apiClient.get("/user", {

    })
}
export {apiRegisterUSer, apiLoginUSer, apiGetCurrentUSer}
