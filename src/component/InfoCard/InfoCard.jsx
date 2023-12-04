import React from 'react'

function InfoCard(props) {
  return (
    <div className="flex gap-2 ml-2 ">
        <img className={""} src={props.src}/>
        <span >{props.title}</span>
    </div>
  )
}

export default InfoCard