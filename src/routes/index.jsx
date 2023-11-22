import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Profile from "../pages/profile.jsx";
import Ui from "../pages/Ui.jsx";
import UiP from "../pages/UiP.jsx";
import Header from "@/component/Layout/Header/Header.jsx";
import Footer from "@/component/Layout/footer/Footer.jsx";
import React from "react";
import Login from "@/pages/Login.jsx";
import Search from "@/pages/search.jsx";
import CourseDetail from "@/pages/CourseDetail.jsx";
import YourCourse_id from "@/pages/yourCourse/[yourCourse_id].jsx"

const router = createBrowserRouter([
    // {
    //   index:true,
    //   element:<Home/>,
    //     children:[
    //         {
    //             <Header></Header>,
    //         <Footer></Footer>
    //         }
    //     ]
    // },
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            // {
            //     path :"/course/:courseId",
            //     element : <course/>
            // }
        ]
    },
    {
        path: "/",
        element:<Home/>,

    },
    {
      path:"/search",
      element:<Search/>
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
        path: "/yourCourse",
        element:<YourCourse_id/>,
    },
    {
      path:"/course/",
        element:<CourseDetail/>,
    },
    {
        path:"/course/:id",
        element:<CourseDetail/>,
    },
    // {
    //     path:"/your-course/:id",
    //     element:<YourCourse_id/>,
    // },
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

