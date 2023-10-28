import "./CardSmall.css"
import image from "@/assets/images/card.png"

function cardSmall(){
  return (
    <div className="content pt-3 px-3 pb-5 mt-12 mr-12 w-1/5 bg-[#FAFAFA] rounded-xl" >
       <img  className="w-full rounded-xl" src={image} alt="" />
       <div className="text flex justify-between">
          <span className="test-2 mt-8 text-xs">طراح</span>
          <span className="test-1 mt-8 text-sm">جان کانتنر</span>
       </div>
    </div>
  )
}

export default cardSmall