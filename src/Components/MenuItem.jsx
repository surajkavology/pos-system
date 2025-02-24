import React from 'react'
import 'remixicon/fonts/remixicon.css'

const MenuItem = (props) => {

  return (
    <>
        <a href="#" className={`${props.isActive ? 'bg-theme text-white' : 'bg-transparent text-theme-gray'} text-base  px-6 py-2 flex gap-2 rounded-10`}> {props.icons} {props.items}</a>
    </>
  )
}

export default MenuItem