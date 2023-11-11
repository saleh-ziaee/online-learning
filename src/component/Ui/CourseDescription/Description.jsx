import React from 'react';

function Description({description,prop}) {
    return (
        <div className={"description"}>
            <div className={"mt-10"}>
                {/*<span className={"font-bold text-xl"}>توضیحات</span>*/}
            </div>
            <div id = "section1" className={"text-gray-500 mt-5"}>
                {description}
            </div>
        </div>    );
}

export default Description;