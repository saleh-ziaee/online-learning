import {fakeRequest} from "@/fake-date/utils.js"
import {product} from "@/fake-array/product.js"

const apiSearchPost = async (filters) => {

    // const result = await apiClient.get('/search', {params: filters})

    var data = product
    // if (filters?.q) {
    //     data = product.filter((post) => post.title.includes(filters.q));
    // }

    if (filters?.q) {
        data = product.filter((post) => post.title.includes(filters.q));
    }

    if (filters?.c) {
        data = product.filter((post) => post.category?.includes(filters.c));
    }

    // else if (filters?.c) {
    //     category1 = product.filter((post) => post.category.includes(filters.category));
    // }

    const result = await fakeRequest(data);
    console.log(result)

    return result;
}

export {apiSearchPost}