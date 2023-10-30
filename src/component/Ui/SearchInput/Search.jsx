import  SearchIcon from "../../../assets/icon/SearchIcon.svg"


function search ({placeholder= 'جست و جو  ' , children ,className,icon}){
  return (
    <div className={`${className} inline-block`}>
        <div dir="rtl" className="flex  justify-between px-5  items-center bg-[#FAFAFA] rounded-xl h-[64px] w-[100%]">
            {children}

            <input maxLength="1000" className="bg-transparent focus-visible:outline-none h-[100%] w-[100%] flex-grow p-3" placeholder={placeholder}/>
          <img src={icon}  className="flex h-5"/>
        </div>
    </div>
  )
}

export default search