import React from 'react'

function InfoCard(props) {
  return (
    <div className="flex gap-2 ml-2 ">
        <img src={props.src}/>
        <span className='text-sm'>{props.title}</span>
    </div>
  )
}

export default InfoCard