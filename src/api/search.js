import {fakeRequest} from "@/fake-date/utils.js"
import {product} from "@/fake-array/product.js"

const apiSearchPost = async (filters) => {

    // const result = await apiClient.get('/search', {params: filters})

    var data = product
    var category = product
    // if (filters?.q) {
    //     data = product.filter((post) => post.title.includes(filters.q));
    // }
    if (filters?.q) {
        data = product.filter((post) => post.title.includes(filters.q));
    }
    else if (filters?.category) {
        category = product.filter((post) => post.category.includes(filters.category));
    }
    const result = await fakeRequest(data);
    // console.log(result)

    return result;
}

export {apiSearchPost}