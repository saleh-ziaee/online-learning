import React from 'react'
import CourseInfo from '../CourseInfo/CourseInfo'
import {product}from "@/fake-array/product.js"
function HeaderProduct({id,title,subTitle}) {
  return (

    <div>
        <div className='p-4'>
          <h1 className=' font-bold text-lg p-3' >{title}</h1>
          <h3 className='text-slate-500 p-2'>{subTitle}</h3>
        </div>
        {/*<CourseInfo></CourseInfo>*/}
    </div>
  )
}

export default HeaderProduct