import React from 'react';
import CategoryItem from "@/component/TopCategory/CategoryPanel/CategoryItem.jsx";
import codeIcon from "@/assets/icon/codeIcon.svg"
import graphicsIcon from "@/assets/images/topCategory/icon.png"
import  videoIcon from "@/assets/icon/video.svg"
import nextIcon from "@/assets/icon/v6-icon (free).svg"
import "./CategoryPanel.css"
function CategoryPanel(props) {
    return (
        <div className={"flex items-center justify-center w-full overflow-y-scroll  category-panel mt-[130px]  gap-[30px]"}>
            <CategoryItem variant=""  className={"category-panel"}><img className={"w-full"} src={nextIcon}/></CategoryItem>
                <CategoryItem  className={"mr-4"} variant="regular">After Effects</CategoryItem>
                <CategoryItem   variant="regular">Lightroom</CategoryItem>
                <CategoryItem   variant="regular">Photography</CategoryItem>
                <CategoryItem   variant="video"><img className={"w-full"} src={videoIcon}/></CategoryItem>
                <CategoryItem  className={"mr-4"} variant="regular">ui & ux</CategoryItem>
                <CategoryItem   variant="regular">vector</CategoryItem>
                <CategoryItem variant="graphics"><img className={"w-full"} src={graphicsIcon}/></CategoryItem>
                <CategoryItem className={"mr-4"} variant="regular">Python</CategoryItem>
                <CategoryItem variant="regular">React</CategoryItem>
                <CategoryItem variant="regular">Unity</CategoryItem>
                <CategoryItem variant="code"><img className={"w-full"} src={codeIcon}/></CategoryItem>
        </div>
    );
}



export default CategoryPanel;