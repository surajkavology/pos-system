import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import MainArea from '../Components/MainArea'

const Home = () => {
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
      <MainArea/>
    </div>
    </>
  )
}

export default Home