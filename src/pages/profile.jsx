import React from 'react';
import {Link} from "react-router-dom";
import MyCourses from "@/component/Profile-MyCourses/MyCourses.jsx";
import {useAuthContext} from "@/providers/AuthProvider";

function Profile(props) {
    const { isLoggedIn } = useAuthContext();

    return (
        <>
            <MyCourses></MyCourses>
        </>
    );
}

export default Profile;