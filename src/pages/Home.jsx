import React, { useState } from "react";
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'
import AboutInfoCardWrap from '../Components/AboutInfoCardWrap'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<<<<<<< HEAD
import UserCard from "../Components/UserCard";
=======
import UserCard from "@/Components/UserCard";
>>>>>>> b6d1e9099b0299ad9e07df15e88d125ad4359d1b


const Home = () => {
 
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
        <Userbar/>
        <AboutInfoCardWrap/>
<<<<<<< HEAD
        <div className="rounded-10 p-6 bg-white mt-8">
        <table class="table-fixed w-full">
            <thead className="bg-[#f8f8f8] text-theme-gray">
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#ORD130</td>
                <td>I Phone 15 Pro Max</td>
                <td>$1,199.00</td>
                <td>Thu, 23 May 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <UserCard/>
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>


    </div>
=======
>>>>>>> b6d1e9099b0299ad9e07df15e88d125ad4359d1b


          <Tabs defaultValue="account" className="w-full mt-14">
            <TabsList className='w-full flex gap-8 p-0 h-auto bg-transparent'>
              <TabsTrigger value="account"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Latest Orders</TabsTrigger>
              <TabsTrigger value="password"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Top Selling</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="bg-white p-6 rounded-10 mt-6">
              <UserCard/>
            </TabsContent>
            <TabsContent value="password" className="bg-white p-6 rounded-10 mt-6">Change your password here.</TabsContent>
          </Tabs>
    </div>
    
    </div>
    </>
  )
}

export default Home