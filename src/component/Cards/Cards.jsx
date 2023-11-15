import React, {useEffect, useState} from 'react';
import Card from "@/component/Ui/Card-course/Card.jsx";
import { Link } from 'react-router-dom';
import "./Cards.css"
import imagef from "@/assets/images/footer/bigImage.svg";
import {product} from "@/fake-array/product.js";
import {apiSearchPost} from  "@/api/search.js"
import {useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import LoadingProduct from "@/component/Loading/LoadingProduct.jsx";

function Cards({className, props}) {
    const [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();
    const [searchParamsCategory] = useSearchParams()


    // const data = await apiSearchPost()
    // setSearchData(data)
    const q = searchParams.get("q");
    const c = searchParamsCategory.get("c");

    const getSearchData = async ()=>{
        try {
            setIsLoading(true);
            const data = await apiSearchPost({ q ,c});
            setSearchData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getSearchData();
    }, [q ,c]);
    // console.log(getSearchData)

    return (
            <div className={ `${className} flex flex-col items-center justify-around w-full lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-3 xl:gap-4 gap-4 md:gap-4 mx-auto mt-5 flex-wrap`}>
                {isLoading?(
                    <>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    </>
                ) : searchData.length === 0 ? (
                    "چیزی یافت نشد."
                    ):(
                    searchData.map((item)=>(
                            <Card key={item.id} {...item}

                            />

                    ))
                )}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}

            </div>

    );
}

export default Cards;