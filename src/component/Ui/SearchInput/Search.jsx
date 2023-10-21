import  SearchIcon from "../../../assets/icon/SearchIcon.svg" 



function search ({placeholder='جست و جو  ' , Button}){
  return (
    <div className="inline-block ">
        <div dir="rtl" className="flex  justify-between px-5  items-center bg-[#FAFAFA] rounded-xl h-16 w-96">
            {
                Button && Button
            }
            <input maxLength="1000" className="bg-transparent focus-visible:outline-none h-[100%] flex-grow" placeholder={placeholder}/>
          <img src={SearchIcon}  className="flex h-5  "/>
         
        </div>
        
    </div>
  )
}

export default search