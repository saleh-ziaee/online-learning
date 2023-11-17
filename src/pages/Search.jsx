import React, {useEffect, useState} from 'react';
import Header from "@/component/Layout/Header/Header.jsx";
import Cards from "@/component/Cards/Cards.jsx";
import {useSearchParams} from "react-router-dom";
import {apiSearchPost} from "@/api/search.js";
import Footer from "@/component/Layout/footer/Footer.jsx";

function Search(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [searchData, setSearchData] = useState([]);
    // const [searchParams] = useSearchParams();
    const [searchParams,setSearchParams] =useSearchParams()
    const [click, SetClick] = useState(false);
    const [query,setQuery]= useState(()=>searchParams.get("q"))
    // const handleClick = () => {
    //     SetClick(true);
    // };
    //
    return (
        <div className={"w-[85%] mx-auto"}>
            <Header/>
            <Cards className = {"mt-[120px]"}/>
            <Footer/>
        </div>
    );
}

export default Search;