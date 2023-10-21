import React from 'react';
import {Link} from "react-router-dom";
import Button from "../component/Ui/Button/Button.jsx";
import Footer from "../component/footer/Footer.jsx";
import Header from "../component/Header/Header.jsx";
function Home(props) {
    return (
<>

    {/*<Link to={'/profile'}>پروفایل</Link>*/}
    {/*<br/>*/}
    {/*<Link to={'/auth'}>صفحه ورود</Link>*/}
    {/*<div className={"flex gap-4 ml-4"}>*/}
    {/*<Button size="md" variant="outline">ورود</Button>*/}
    {/*<Button size="sm" variant="fill">پروفایل</Button>*/}
    {/*</div>*/}
    <Header></Header>
    <Footer></Footer>
</>

    );
}

export default Home;