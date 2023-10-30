import React from 'react';

function CategoryItem({variant, children, ...props}) {
    const variants={
        code:"bg-[#EBFAF5]",
        graphics:"bg-[#9E5CF240]",
        video:"bg-[#FFF5F5]",
        regular:"bg-[#FAFAFA]"
    }
    return (
        <div className={`${variants[variant]} min-w-fit cursor-pointer text-center text-[16px] p-4 text-black flex items-center justify-center rounded-[12px] ` }>
            {children}
        </div>
    );
}
export default CategoryItem;