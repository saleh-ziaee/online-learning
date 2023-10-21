import React, {Children} from 'react';
import "./Button.css"
function Button({variant= "fill",children,size="md",...props}) {

        const variants ={
            fill:"hover:bg-primary-500 bg-black text-white",
            outline : "bg-[#E6E6E6] border border-[#F1F1F1]  "
        }
        const sizes ={
            md:"p-4",
            sm:"px-4 py-2.5"
        }
    return (
        <div className={ `${variants[variant]}  ${sizes[size]} flex items-center     rounded-[10px] justify-center cursor-pointer  `} {...props}>
            {children}
        </div>
    );
}

export default Button;