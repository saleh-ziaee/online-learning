import { useQuery } from "react-query";
import { apiGetCourseDetail } from "../course";

const useGetCourseDetails = ({ courseId }) => {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: () => apiGetCourseDetail(courseId),
  });
};

export default useGetCourseDetails;
