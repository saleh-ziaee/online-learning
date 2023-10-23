import React from 'react';
import CategoryItem from "@/component/TopCategory/CategoryPanel/CategoryItem.jsx";
import codeIcon from "@/assets/icon/codeIcon.svg"
import graphicsIcon from "@/assets/icon/icon.svg"
import  videoIcon from "@/assets/icon/video.svg"
import nextIcon from "@/assets/icon/v6-icon (free).svg"
function CategoryPanel(props) {
    return (
        <div className={"flex items-center justify-center mt-[70px] gap-[30px]"}>
            <CategoryItem variant=""><img src={nextIcon}/></CategoryItem>

            <div className={"flex items-center justify-center gap-4"}>
                <CategoryItem   variant="regular">After Effects</CategoryItem>
                <CategoryItem   variant="regular">Lightroom</CategoryItem>
                <CategoryItem   variant="regular">Photography</CategoryItem>
                <CategoryItem   variant="video"><img src={videoIcon}/></CategoryItem>

            </div>
            <div className={"flex items-center justify-center gap-4"}>
                <CategoryItem   variant="regular">ui & ux</CategoryItem>
                <CategoryItem   variant="regular">vector</CategoryItem>
                <CategoryItem variant="graphics"><img src={graphicsIcon}/></CategoryItem>

            </div>

            <div className={"flex items-center justify-center gap-4"}>
                <CategoryItem variant="regular">Python</CategoryItem>
                <CategoryItem variant="regular">React</CategoryItem>
                <CategoryItem variant="regular">Unity</CategoryItem>
                <CategoryItem variant="code"><img src={codeIcon}/></CategoryItem>
            </div>
        </div>
    );
}



export default CategoryPanel;