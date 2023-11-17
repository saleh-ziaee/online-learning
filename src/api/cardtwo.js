import {fakeRequest} from "@/fake-date/utils.js"
import {cardtowarray} from "@/fake-array/cardtowarray.js";

const apiSearchPost = async (filters) => {

    // const result = await apiClient.get('/search', {params: filters})

    var data = cardtowarray
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