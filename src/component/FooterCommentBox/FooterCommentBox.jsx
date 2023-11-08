import React from "react";

function FooterCommentBox({ title, subtitle }) {
  return (
    <div>
      <div
        className={
          "flex flex-col mt-5 p-[16px] w-[100%] gap-4 rounded-[20px] bg-secondary-300"
        }
      >
        <span className={"font-bold"}>{title}</span>
        <span className={"text-secondary-400"}>{subtitle}</span>
      </div>
    </div>
  );
}

export default FooterCommentBox;
