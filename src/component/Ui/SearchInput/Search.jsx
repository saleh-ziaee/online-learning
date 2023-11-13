import  SearchIcon from "../../../assets/icon/SearchIcon.svg"
import {useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";


function search ({placeholder= 'جست و جو  ' , children ,className,icon}){
    const [searchParams,setSearchParams] =useSearchParams()
    const [query,setQuery]= useState(()=>searchParams.get("q"))
    const navigate = useNavigate()

    const handleSearch=(event)=>{
        event.preventDefault();
        navigate("/search")

        searchParams.set("q",query)
        setSearchParams((s)=>({...s,q:query}))

        console.log(query)
    }

  return (
    <div className={`${className} inline-block`}>
        <form dir="rtl" className="flex justify-between px-5 relative items-center bg-[#FAFAFA] rounded-xl h-[64px] w-[100%]" onSubmit={handleSearch}>
            {children}
            <input maxLength="1000"
            type="text"
                   value={query}
                   onChange={(e)=>setQuery(e.target.value)}
                   className="bg-transparent focus-visible:outline-none h-[100%] w-[100%] flex-grow p-3" placeholder={placeholder}/>
            <button onSubmit={handleSearch}>
                <img src={icon}  className="flex w-[100%] h-[40px] "/>
            </button>
        </form>
    </div>
  )
}

export default search