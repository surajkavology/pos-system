import React from 'react'

const AboutInfoCard = (props) => {
  return (
    <>
    <div className='bg-white shadow-xl rounded-10 p-4 text-center'>
        <img src={props.icon} alt="" className='size-10 m-auto mb-4'/>
        <h4 className='mb-3'>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
    </>
  )
}

export default AboutInfoCard