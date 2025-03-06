import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import Userbar from '../Components/Userbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductStatus from '@/Components/ProductStatus'

const OrderView = () => {
  return (
    <>
    <div className='mainarea flex'>
      <SidebarMenu/>
    <div className='w-full ml-[300px] bg-zinc-50 min-h-screen p-8'>
      <Userbar/>

      <Tabs defaultValue="pending" className="w-full mt-14">
            <TabsList className='w-full flex gap-8 p-0 h-auto bg-transparent'>
              <TabsTrigger value="pending"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Latest Orders</TabsTrigger>
              <TabsTrigger value="completed"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Top Selling</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="bg-white p-6 rounded-10 mt-6">
            <ProductStatus/>
            </TabsContent>
            <TabsContent value="completed" className="bg-white p-6 rounded-10 mt-6">Change your password here.</TabsContent>
        </Tabs>

    </div>
    </div>
    </>
  )
}

export default OrderView