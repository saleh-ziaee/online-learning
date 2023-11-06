import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

import router from "./routes/index.jsx"
import {Helmet} from "react-helmet";
import {HelmetProvider} from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
    <HelmetProvider>

            <RouterProvider router={router}/>,


            <Helmet titleTemplate={"آموزش آنلاین | %s"} />

      </HelmetProvider>
</AuthProvider >
);
