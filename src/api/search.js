import {fakeRequest} from "@/fake-date/utils.js"
import {product} from "@/fake-array/product.js"

const apiSearchPost = async (filters) => {

    // const result = await apiClient.get('/search', {params: filters})

    var data = product


    const result = await fakeRequest(data);
    return result;


}

export {apiSearchPost}