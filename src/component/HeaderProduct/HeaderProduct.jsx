import React from 'react'
import CourseInfo from '../CourseInfo/CourseInfo'

function HeaderProduct() {
  return (
    <div>
        <div className='p-4'>   
          <h1 className=' font-bold text-lg p-3'>دوره مقدماتی برنامه نویسی فرانت‌اند - React, NextJs</h1>
          <h3 className='text-slate-500 p-2'>شامل ۱۴۴ ساعت آموزش همراه با تمرین و پروژه‌های عملی</h3>
        </div>
        <CourseInfo></CourseInfo>
    </div>
  )
}

export default HeaderProduct