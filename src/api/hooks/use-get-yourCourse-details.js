import { useQuery } from "react-query";
import {apiGetYourCourse} from "@/api/yourcourse";



const useGetYourCourseDetails=({yourCourseId})=>{
    return useQuery({
        queryKey:["yourCourse",yourCourseId],
        queryFn :()=>apiGetYourCourse(yourCourseId)
    })
}
export default useGetYourCourseDetails;