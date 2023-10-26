import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Profile from "../pages/Profile.jsx";
import Ui from "../pages/Ui.jsx";
import UiP from "../pages/UiP.jsx";
import React from "react";
import Login from "@/pages/Login.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
    },
    {
        path: "/auth",
        element:<Auth/>,
    },
    {
        path: "/profile",
        element:<Profile/>,
    },
    {
        path: "/ui",
        element:<Ui/>,
    },
    {
        path: "/login",
        element:<Login/>,
    },
    // {
    //     path: "/uipanel",
    //     element:<TopPanel/>,
    // },
]);

export default router

