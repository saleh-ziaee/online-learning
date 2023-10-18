import React from 'react';
import {Link} from "react-router-dom";

function Profile(props) {
    return (
        <>
            <Link to={'/'}>home</Link>
            <Link to={'/auth'}>صفحه ورود</Link>
        </>
    );
}

export default Profile;