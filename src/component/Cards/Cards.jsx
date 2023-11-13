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

function Cards({className, props}) {
    const [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();


    // const data = await apiSearchPost()
    // setSearchData(data)
    const q = searchParams.get("q");

    const getSearchData = async ()=>{
        try {
            setIsLoading(true);
            const data = await apiSearchPost({ q });

            setSearchData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getSearchData();
    }, [q]);
    // console.log(getSearchData)

    return (
            <div className={ `${className} flex flex-col items-center justify-around w-full lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-3 xl:gap-4 gap-4 md:gap-4 mx-auto mt-5 flex-wrap`}>
                {isLoading?(
                    <div className="animate-pulse mx-auto flex flex-col items-center gap-4 w-60">
                        <div>
                            <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
                            <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
                        </div>
                        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                        <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
                    </div>
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