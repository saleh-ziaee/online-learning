import React, {Children} from 'react';
import "./Button.css"
function Button({variant= "fill",className,children,size="md",...props}) {

        const variants ={
            fill:"hover:bg-primary-500 bg-black text-white",
            outline : "bg-[#E6E6E6] border border-[#F1F1F1]  ",
            gray:"bg-[#F5F5F5] text-[#3E3232BF]"
        }
        const sizes ={
            md:"p-4",
            sm:"px-4 py-2.5"
        }
    return (
        <div className={ `${className} ${variants[variant]} button  ${sizes[size]} flex items-center justify-between gap-4 rounded-[10px] cursor-pointer  `} {...props}>
            {children}
        </div>
    );
}

export default Button;