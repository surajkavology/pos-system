import React from 'react'
import Userbar from '../Components/Userbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductStatus from '@/Components/ProductStatus'

const OrderView = () => {
  return (
    <>
    <div className='mainarea'>
    <div>
      <Userbar/>

      <Tabs defaultValue="pending" className="w-full mt-14">
            <TabsList className='w-full flex gap-8 p-0 h-auto bg-transparent'>
              <TabsTrigger value="pending"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Latest Orders</TabsTrigger>
              <TabsTrigger value="completed"  className="w-[50%] block p-4 shadow-2xl cursor-pointer rounded-10 bg-white text-bold text-xl text-black data-[state=active]:bg-theme data-[state=active]:text-white">Top Selling</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="mt-6">
            <ProductStatus/>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
            <ProductStatus/>
            </TabsContent>
        </Tabs>

    </div>
    </div>
    </>
  )
}

export default OrderView