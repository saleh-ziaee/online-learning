import React from "react";
import img from "@/assets/images/top-panel.png";
import Button from "../Ui/Button/Button";

function TopPanel() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-3xl ">سلام بچه ها! می خواهیم با هم دوره طراحی وب راه اندازی کنیم.</p>
          <Button className={"items-center justify-center"}>هم اکنون دوره را شروع کنید</Button>
        </div>
        <img src={img} className="flex " />
      </div>
    </div>
  );
}

export default TopPanel