import React from 'react'
import SidebarMenu from './Components/SidebarMenu'
import MainArea from './Components/MainArea'

function App() {
  return (
    <>
    <div className='main-conatiner flex '>
     <SidebarMenu/>
      <MainArea />
    </div>

    </>
  )
}

export default App