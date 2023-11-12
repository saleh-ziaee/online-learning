import {fakeRequest} from "@/fake-date/utils.js"
import {product} from "@/fake-array/product.js"

const apiGetCourseDetail = async (course_id) => {

    // const result = await apiClient.get(`/course/${course_id}`)

    var data = product.find((p) => p.id == course_id)

    const result = await fakeRequest(data);

    return result;
}

export {apiGetCourseDetail}