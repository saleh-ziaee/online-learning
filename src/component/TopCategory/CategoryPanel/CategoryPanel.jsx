import React from "react";
import CategoryItem from "@/component/TopCategory/CategoryPanel/CategoryItem.jsx";
import codeIcon from "@/assets/icon/codeIcon.svg";
import graphicsIcon from "@/assets/images/topCategory/icon.png";
import videoIcon from "@/assets/icon/video.svg";
import nextIcon from "@/assets/icon/v6-icon (free).svg";
import Image from "next/image";

function CategoryPanel(props) {
  return (
    <div
      className={
        "md:items-center md:justify-center w-full overflow-y-scroll  hide-scroll mt-[130px]  gap-[30px] flex flex-none md:flex-none "
      }
    >
      <CategoryItem variant="" className={"hide-scroll"}>
      </CategoryItem>
      <CategoryItem className={"mr-4"} variant="regular">
        After Effects
      </CategoryItem>
      <CategoryItem variant="regular">Lightroom</CategoryItem>
      <CategoryItem variant="regular">Photography</CategoryItem>
      <CategoryItem variant="video">
        <Image className={"w-full"} src={videoIcon} />
      </CategoryItem>
      <CategoryItem className={"mr-4"} variant="regular">
        ui & ux
      </CategoryItem>
      <CategoryItem variant="regular">vector</CategoryItem>
      <CategoryItem variant="graphics">
        <img className={"w-full"} src={graphicsIcon.src} />
      </CategoryItem>
      <CategoryItem className={"mr-4"} variant="regular">
        Python
      </CategoryItem>
      <CategoryItem variant="regular">React</CategoryItem>
      <CategoryItem variant="regular">Unity</CategoryItem>
      <CategoryItem variant="code">
        <img className={"w-full"} src={codeIcon.src} />
      </CategoryItem>
    </div>
  );
}

export default CategoryPanel;
