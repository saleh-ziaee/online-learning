import React from 'react';
import banerpic from "../../assets/images/baner/banerpic.png";

function Title(props) {
    return (
        <div>
<div className={"flex"}>
    <span className={"text-[30px]"}>🙌 Hello friends
I am Sofia and we want to start a web design course together. Do you like it too 😍 ?</span>
    <img src="{banerpic}" alt=""/>
</div>
        </div>
    );
}

export default Title;