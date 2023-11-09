import {fakeRequest} from "@/fake-date/utils.js"
import {product} from "@/fake-array/product.js"

const apiSearchPost = async () => {

    // const result = await apiClient.get('/search', {params: filters})

    var data = product
    // if (filters?.q) {
    //     data = product.filter((post) => post.title.includes(filters.q));
    // }

    const result = await fakeRequest(data);
    // console.log(result)

    return result;
}

export {apiSearchPost}