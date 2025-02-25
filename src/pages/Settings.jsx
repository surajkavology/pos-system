import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'

const Settings = () => {

  const settings = [
    { item: "Item Name", icon: <i className="ri-user-3-fill"></i>},
    { item: "Help and Support", icon: <i className="ri-question-fill"></i>},
    { item: "End-user License Agreement", icon: <i className="ri-list-check"></i>},
    { item: "End-user License Agreement", icon: <i className="ri-logout-box-r-line"></i>},
  ];
  
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
      <Userbar/>

    <div className='p-8 bg-white shadow-2xl rounded-10 mt-12 min-h-185'>
      <ul>
        {settings.map((elem, index)=>(
          <li key={index} className='border-b-2 border-black p-2 flex items-center gap-2 text-2xl mt-2'>
             {elem.icon} 
             <p className='text-black font-semibold text-base'>{elem.item}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default Settings