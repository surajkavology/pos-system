import React, { useState } from "react";
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'
import AboutInfoCardWrap from '../Components/AboutInfoCardWrap'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserCard from "@/Components/UserCard";


const Home = () => {
 
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
        <Userbar/>
        <AboutInfoCardWrap/>


          <Tabs defaultValue="account" className="w-full mt-14">
            <TabsList className='w-full flex gap-8 p-0 h-auto'>
              <TabsTrigger value="account"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Latest Orders</TabsTrigger>
              <TabsTrigger value="password"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Top Selling</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <UserCard/>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
    </div>
    
    </div>
    </>
  )
}

export default Home