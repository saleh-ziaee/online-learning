import  SearchIcon from "../../../assets/icon/SearchIcon.svg"
import {useState} from "react";
import {useSearchParams} from "react-router-dom";


function search ({placeholder= 'جست و جو  ' , children ,className,icon}){
    const [query,setQuery]= useState("")
    const [searchParams,setSearchParams] =useSearchParams()


    const handeleSearch=(event)=>{
        event.preventDefault();

        const oldQ = searchParams.get("q")
        searchParams.set("q",query)
        const newQ = searchParams.get("q")
        console.log(query)
    }

  return (
    <div className={`${className} inline-block`}>
        <form dir="rtl" className="flex  justify-between px-5  items-center bg-[#FAFAFA] rounded-xl h-[64px] w-[100%]" onSubmit={handeleSearch}>
            {children}
            <input maxLength="1000"
            type="text"
                   value={query}
                   onChange={(e)=>setQuery(e.target.value)}
                   className="bg-transparent focus-visible:outline-none h-[100%] w-[100%] flex-grow p-3" placeholder={placeholder}/>
            <button onSubmit={handeleSearch}>
                <img src={icon}  className="flex h-5 w-fit"/>
            </button>
        </form>
    </div>
  )
}

export default search