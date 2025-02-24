import React, { useState } from 'react'
import siteLogo from '../assets/Images/site-logo.svg'
import MenuItem from './menuItem'

const SidebarMenu = () => {

  const  menuitem = [
    {item:"Dashboard", icon:<i className="ri-dashboard-fill"></i> },
    {item:"Order View", icon:<i className="ri-list-unordered"></i>},
    {item:"Manage Items", icon:<i className="ri-stack-fill"></i>},
    {item:"Settings", icon: <i className="ri-settings-3-fill"></i>},
    {item:"Notifications" , icon: <i className="ri-notification-2-fill"></i>},
    {item:"Logout", icon: <i className="ri-logout-box-r-line"></i>}

  ] 

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <div className='slidebar-menu px-[50px] py-16 fixed top-0 left-0 bottom-0 w-[300px] shadow-2xl'>
        <div className='site-logo mb-6'><img src={siteLogo} alt="site-logo" className='max-w-[150px] m-auto'/></div>
        <div className='sidebar-menu'>
          <ul className='flex flex-col gap-3'>
            {menuitem.map((menu, index)=>(
              <li key={index} onClick={()=> setActiveIndex(index)}>
                <MenuItem items={menu.item} icons= {menu.icon} isActive={activeIndex === index}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default SidebarMenu