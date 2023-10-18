import React from 'react';
import {Link} from "react-router-dom";
import Button from "../assets/component/Ui/Button/Button.jsx";
function Home(props) {
    return (
<>
    <Link to={'/profile'}>پروفایل</Link>
    <br/>
    <Link to={'/auth'}>صفحه ورود</Link>
    <div className={"flex gap-4 ml-4"}>
    <Button size="md" variant="outline">ورود</Button>
    <Button size="sm" variant="fill">پروفایل</Button>
    </div>

</>

    );
}

export default Home;