import {fakeRequest} from "@/fake-date/utils.js"
import {profilecourse} from "@/fake-array/profilecourse.js"

const accordion = async () => {

    // const result = await apiClient.get(`/course/${course_id}`)

    var data = Object(profilecourse)

    const result = await fakeRequest(data);

    console.log(result)
    return result;
}

export {accordion}