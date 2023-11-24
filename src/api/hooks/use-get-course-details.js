import { useQuery } from "react-query";
import { apiGetCourseDetail } from "../course";

const useGetCourseDetails = ({ courseId }, options = {}) => {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: () => apiGetCourseDetail(courseId),
    ...options
  });
};

export default useGetCourseDetails;
