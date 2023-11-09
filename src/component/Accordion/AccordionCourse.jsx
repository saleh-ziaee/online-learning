import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import watch from "../../assets/images/CourseDetail/watch.svg"
import video from "../../assets/images/CourseDetail/video.svg"


export default function AccordionCourse({title},...props) {
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
                                <span>۱۲ ساعت</span>
                            </div>
                            <div className={"flex flex-row gap-x-2"}>
                                <img src={video} alt=""/>
                                <span>۱۶ ویدیو</span>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       <div className={"flex flex-col gap-y-4"}>
                           <div className={"flex justify-between"}>
                               <span className={"text-gray-500"}>Introduction to HTML: Basic syntax, tags, elements, and attributes.</span>
                               <span className={"text-gray-500"}>۴۵:۳۱</span>

                           </div>
                           <div className={"flex justify-between"}>
                               <span className={"text-gray-500"}>Introduction to HTML: Basic syntax, tags, elements, and attributes.</span>
                               <span className={"text-gray-500"}>۴۵:۳۱</span>

                           </div>
                           <div className={"flex justify-between"}>
                               <span className={"text-gray-500"}>Introduction to HTML: Basic syntax, tags, elements, and attributes.</span>
                               <span className={"text-gray-500"}>۴۵:۳۱</span>

                           </div>
                       </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
