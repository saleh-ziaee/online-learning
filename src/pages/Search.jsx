import React, {useState} from 'react';
import Header from "@/component/Layout/Header/Header.jsx";
import Cards from "@/component/Cards/Cards.jsx";
import {useSearchParams} from "react-router-dom";

function Search(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [searchData, setSearchData] = useState([]);
    const [searchParams] = useSearchParams();
    const [click, SetClick] = useState(false);
    const handleClick = () => {
        SetClick(true);
    };

    // const q = searchParams.get("q");


    return (
        <div className={"w-[85%] mx-auto"}>
            <Header/>
            <Cards className = {"mt-[100px]"}/>
        </div>
    );
}

export default Search;