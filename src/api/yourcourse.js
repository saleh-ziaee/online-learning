import {fakeRequest} from "@/fake-date/utils.js"
import {profilecourse} from "@/fake-array/profilecourse.js"

const apiGetYourCourse = async (yourcourse_id) => {

    // const result = await apiClient.get(`/course/${course_id}`)

    var data = profilecourse.find((y) => y.id == yourcourse_id)

    const result = await fakeRequest(data);
    // console.log(result)

    return result;
}

export {apiGetYourCourse}