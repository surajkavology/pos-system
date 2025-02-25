import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'
import AboutInfoCardWrap from '../Components/AboutInfoCardWrap'

const Home = () => {
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
        <Userbar/>
        <AboutInfoCardWrap/>
    </div>

    </div>
    </>
  )
}

export default Home