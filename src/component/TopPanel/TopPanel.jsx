import React from "react";
import img from "@/assets/images/top-panel.png";
import Button from "../Ui/Button/Button";

function TopPanel() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start items-start gap-4">
          <p className="text-3xl font-bold">سلام بچه ها! می خواهیم با هم دوره طراحی وب راه اندازی کنیم.</p>
          <Button>هم اکنون دوره را شروع کنید</Button>
        </div>
        <img src={img} className="flex " />
      </div>
    </div>
  );
}

export default TopPanel;
