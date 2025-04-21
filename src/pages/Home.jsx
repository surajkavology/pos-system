import React, { useState } from "react";
import Userbar from '../Components/Userbar'
import AboutInfoCardWrap from '../Components/AboutInfoCardWrap'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductTable from "@/Components/ProductTable";


const Home = () => {
 
  return (
    <>
    <div className='mainarea'>
      <div>
        <Userbar/>
        <AboutInfoCardWrap/>
          <Tabs defaultValue="account" className="w-full mt-14">
            <TabsList className='w-full flex gap-8 p-0 h-auto bg-transparent'>
              <TabsTrigger value="account"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Latest Orders</TabsTrigger>
              <TabsTrigger value="password"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Top Selling</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-6">
              <ProductTable/>
            </TabsContent>
            <TabsContent value="password" className="bg-white p-6 rounded-10 mt-6">
            <ProductTable/>
            </TabsContent>
          </Tabs>
    </div>
    
    </div>
    </>
  )
}

export default Home