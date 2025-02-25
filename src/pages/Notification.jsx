import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'
import NotificationCard from '../Components/NotificationCard'
import profileImg from '../assets/Images/profile.png'

const Notification = () => {
  const notificationData = [
    {profile:`${profileImg}`, heading: "Emma Watson", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {profile:`${profileImg}`, heading: "Emma Watson", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {profile:`${profileImg}`, heading: "harry", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {profile:`${profileImg}`, heading: "Emma Watson", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {profile:`${profileImg}`, heading: "Emma Watson", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  ];

  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
      <Userbar/>
      <div className='grid gap-6 mt-12'>
        {notificationData.map((elem, index)=>(
          <NotificationCard key={index} profileImg={elem.profile} username={elem.heading} para={elem.text}/>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default Notification