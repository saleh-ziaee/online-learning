import React from 'react';
import {Link} from "react-router-dom";
function Home(props) {
    return (
<>
    <Link to={'/profile'}>پروفایل</Link>
    <Link to={'/auth'}>صفحه ورود</Link>
</>

    );
}

export default Home;