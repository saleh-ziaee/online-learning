import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import watch from "../../assets/images/CourseDetail/watch.svg"
import video from "../../assets/images/CourseDetail/video.svg"
import {product} from "@/fake-array/product.js";
import {key} from "localforage";


export default function AccordionCourse({title,videos,watchTime},...props) {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={"flex flex-row w-full justify-between"}>
                        <Typography
                            expandIcon={<ExpandMoreIcon />}
                        >{title}</Typography>
                        <div className={"flex flex-row gap-x-1.5"}>
                            <div className={"flex flex-row gap-x-2"}>
                                <img src={watch} alt=""/>
                                <span>{watchTime} ساعت</span>
                            </div>
                            <div className={"flex flex-row gap-x-2"}>
                                <img src={video} alt=""/>
                                <span>{videos} ویدیو</span>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className={"flex flex-col gap-y-4"}>
                        {
                            product[0].sections[0].subsections.map((item) => (
                                <div className={"flex justify-between"} key={item.id}>
                                    <span className={"text-gray-500"}>{item.title}</span>
                                    <span className={"text-gray-500"}>{item.watchTime}</span>
                                </div>
                            ))}

                           {/*<div className={"flex justify-between"}>*/}
                           {/*    <span className={"text-gray-500"}>Introduction to HTML: Basic syntax, tags, elements, and attributes.</span>*/}
                           {/*    <span className={"text-gray-500"}>۴۵:۳۱</span>*/}

                           {/*</div>*/}
                           {/*<div className={"flex justify-between"}>*/}
                           {/*    <span className={"text-gray-500"}>Introduction to HTML: Basic syntax, tags, elements, and attributes.</span>*/}
                           {/*    <span className={"text-gray-500"}>۴۵:۳۱</span>*/}

                           {/*</div>*/}
                       </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
