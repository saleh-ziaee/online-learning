import React, {useMemo, useState} from 'react';
import Sidebar from "@/component/Sidebar/Sidebar.jsx";
import menuIcon from "@/assets/images/navbar/menu.png";
import userImg from "@/assets/images/Header/Profile.svg";
import notifeIcon from "@/assets/images/Header/nortife.svg";
import ProfileCourseUi from "@/component/Ui/ProfileCourse/ProfileCourseUi.jsx";
import AccordionCourse from "@/component/Accordion/AccordionCourse.jsx";
import {useRouter} from "next/router";
import useGetYourCourseDetails from "@/api/hooks/use-get-yourCourse-details";
import LoadingCourseDetail from "@/component/Loading/LoadingCourseDetail";
import cx from 'clsx'
import ProfileLayout from "@/component/Layout/profile";


function YourCourse_id(props) {
    const router = useRouter();
    const yourCourseId = router.query.yourCourse_id;
    // const [loading, setLoading] = useState(false)
    // const [yourCourse, setYourCourse] = useState(null)
    const [accordionData, setAccordionData] = useState(null)


    const {data, loading} = useGetYourCourseDetails({yourCourseId});
    const yourCourse = useMemo(() => data, [data]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    // const getyourCourse = async () =>{
    //     if (loading) return
    //
    //     try {
    //         setLoading(true)
    //         const result = await apiGetYourCourse(yourCourseId)
    //         console.log(result)
    //
    //         setYourCourse(result)
    //     } catch (error) {
    //         console.error(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    // useEffect(() => {
    //     if (yourCourseId) {
    //         getyourCourse(yourCourseId)
    //     }
    // }, [yourCourseId]);
    const getAccordionData = (item) => {
        setAccordionData(item)
        router.push({
            query: {
                ...router.query,
                sub_section: item.id
            }
        })
    }

    const selectedSection = useMemo(() => {
        const _data = yourCourse?.sections || []

        return _data.find((section) => {
            return section.subSection.some((sub) => {
                return sub.id == router.query.sub_section
            })
        })

    }, [yourCourse, router.query.sub_section]);

    console.log(selectedSection)
    console.log(accordionData);

    return (
        <div className={"w-full bg-[#F3F5FF] relative"}>
            {loading || !yourCourse ? (
                <div className={"flex w-full justify-center items-center h-[600px]"}>
                    <LoadingCourseDetail/>
                </div>
            ) : (
                <div className={"flex flex-col md:flex md:flex-row md:basis-4/5 justify-center p-8 gap-8"}>
                    <div className={"mt-5 basis-1/2"}>

                        {
                            accordionData ? (
                                <ProfileCourseUi
                                    title={accordionData?.title}
                                    videoSrc={accordionData?.videoSrc}
                                    description={accordionData?.description}
                                />
                            ) : (
                                <ProfileCourseUi
                                    title={yourCourse?.title}
                                    description={yourCourse?.description}
                                />
                            )
                        }

                    </div>
                    <div className={" basis-1/2"}>
                        {
                            yourCourse.sections.map((item) => (
                                <AccordionCourse
                                    {...item}
                                    key={item.id}
                                    onClick={getAccordionData}
                                    isOpen={item.id == selectedSection?.id}
                                    selectedSubSectionId={router.query.sub_section}
                                />
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

YourCourse_id.isprotected = true;

YourCourse_id.Layout = ProfileLayout
export default YourCourse_id;