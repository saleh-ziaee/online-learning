import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../../App.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Profile from "../pages/Profile.jsx";



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
]);

export default router

