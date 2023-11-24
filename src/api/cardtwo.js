import {fakeRequest} from "@/fake-date/utils.js"
import {profilecourse} from "@/fake-array/profilecourse";

const apiSearchPost = async (filters) => {

    // const result = await apiClient.get('/search', {params: filters})

    var data = profilecourse
    // if (filters?.q) {
    //     data = product.filter((post) => post.title.includes(filters.q));
    // }

    // else if (filters?.c) {
    //     category1 = product.filter((post) => post.category.includes(filters.category));
    // }

    const result = await fakeRequest(data);
    // console.log(result)

    return result;
}
export {apiSearchPost}