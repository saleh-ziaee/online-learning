import {useState} from "react";
import {useSearchParams} from "react-router-dom";


function Search({}){
    const [query,setQuery]= useState("")
    const [searchParams,setSearchParams] =useSearchParams()


    const handeleSearch=(event)=>{
        event.preventDefault();

        const oldQ = searchParams.get("q")
        searchParams.set("q",query)
        const newQ = searchParams.get("q")
        console.log(query)
    }


}