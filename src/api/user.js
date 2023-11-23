import {apiClient} from "@/api/request.js";

const apiRegisterUSer =(data) => {
    return apiClient.post("/register",data)
}
const apiLoginUSer =(data) => {
    return apiClient.post("/login",data)
}
const apiGetCurrentUSer =() => {
    const accessToken = localStorage.getItem("access_token");
    return apiClient.get("/user", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
}
export {apiRegisterUSer, apiLoginUSer, apiGetCurrentUSer}
