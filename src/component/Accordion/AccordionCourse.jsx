// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import watch from "../../assets/images/CourseDetail/watch.svg"
import video from "../../assets/images/CourseDetail/video.svg"
import videoIcon from "@/assets/images/accordion/v6-icon (free).svg"
import {product} from "@/fake-array/product.js";
import {useEffect, useState} from "react";
import {apiGetCourseDetail} from "@/api/course.js";
import{accordion} from "@/api/accordion.js";
import {useParams} from "react-router-dom";
import { profilecourse } from "@/fake-array/profilecourse.js";
import "./accordion.css"


export default function AccordionCourse({title,videos,watchTime,subSection, onClick},...props) {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [accordionDetail, setAccordionDetail] = useState(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    const getAccordion = async () => {
        if (loading) return

        try {
            setLoading(true)

            const result = await accordion()
            // console.log(result)
            setAccordionDetail(result)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAccordion()
    }, [id]);
    const handleAccordionTitleClick = (data) => {
        setSelectedVideo(data);
    };


    return (
        <>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={"flex flex-row w-full justify-between"}>
                        <Typography className={"title"}
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
                        <div className={"flex flex-col gap-y-4 " +
                            ""}>

                        {subSection.map((item) => (
                                <div className={"flex justify-between"} key={item.id}>
                                    <img src={videoIcon} alt={"video-icon"}/>
                                    <span className={"text-gray-500 cursor-pointer"} onClick={()=>onClick(item)}
                                          key={item.id}
                                    >{item.title}</span>

                                    <span className={"text-gray-500"}>{item.watchTime}</span>
                                </div>
                            ))}
                       </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
