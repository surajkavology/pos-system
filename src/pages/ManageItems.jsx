import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'

const ManageItems = () => {
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
    <Userbar/>
    </div>

    </div>
    </>
  )
}

export default ManageItems