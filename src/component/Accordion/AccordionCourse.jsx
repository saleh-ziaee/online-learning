// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import watch from "../../assets/images/CourseDetail/watch.svg";
import video from "../../assets/images/CourseDetail/video.svg";
import videoIcon from "@/assets/images/accordion/v6-icon (free).svg";
import { product } from "@/fake-array/product.js";
import { useEffect, useState } from "react";
import { apiGetCourseDetail } from "@/api/course.js";
import { accordion } from "@/api/accordion.js";
import { profilecourse } from "@/fake-array/profilecourse.js";

export default function AccordionCourse(
  { title, videos, watchTime, subSection, onClick, isOpen, selectedSubSectionId },
  ...props
) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleAccordionTitleClick = (data) => {
    setSelectedVideo(data);
  };

  return (
    <>
      <Accordion defaultExpanded={isOpen}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={"flex flex-row w-full justify-between"}>
            <div>
              {title}
            </div>

            <div className={"flex gap-4"}>
              <div className={"flex items-center gap-x-2 whitespace-nowrap"}>
                <img src={watch.src} alt="" />
                <span>{watchTime} ساعت</span>
              </div>
              <div className={"flex items-center flex-row gap-x-2 whitespace-nowrap"}>
                <img src={video.src} alt="" />
                <span>{videos} ویدیو</span>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={"flex flex-col gap-y-2"}>
            {subSection.map((item) => (
                <div
                    className={`flex gap-4 py-1 ${
                        selectedSubSectionId == item.id
                            ? "bg-purple-300 px-2 rounded" // Apply your selected styles here
                            : ""
                    }`}
                    onClick={() => {
                      handleAccordionTitleClick(item);
                      onClick(item);
                    }}
                    key={item.id}
                >
                  <img src={videoIcon.src} alt={"video-icon"} />
                  <span
                      className={`text-gray-500 cursor-pointer ${
                          selectedSubSectionId == item.id
                              ? "pl-0" // Apply your selected styles here
                              : "pl-4"
                      }`}

                      key={item.id}
                  >
                    {item.title}
                  </span>

                  <span className={"text-gray-500 mr-auto"}>{item.watchTime}</span>
                </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
