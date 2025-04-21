import React from 'react'
import Userbar from '../Components/Userbar'
import cloud from  '../assets/Images/cloud-icon.svg'

const ManageItems = () => {
  return (
    <>
    <div className='mainarea'>
    <div>
    <Userbar/>
      <div className='bg-white rounded-10 mt-16 p-8'>
        <form>
        <input type="text" placeholder='Item Name' className='w-full placeholder:text-base border border-theme-gray placeholder:text-theme-gray bg-white rounded-xl h-[50px] py-2 px-4 mb-6 focus:outline-2 focus:outline-theme focus:border-transparent'/>
        <input type="text" placeholder='Item Price' className='w-full placeholder:text-base border border-theme-gray placeholder:text-theme-gray bg-white rounded-xl h-[50px] py-2 px-4 mb-6 focus:outline-2 focus:outline-theme focus:border-transparent'/>
        <input type="text" placeholder='Item Type' className='w-full placeholder:text-base border border-theme-gray placeholder:text-theme-gray bg-white rounded-xl h-[50px] py-2 px-4 mb-6 focus:outline-2 focus:outline-theme focus:border-transparent'/>
        <input type="text" placeholder='Category Type' className='w-full placeholder:text-base border border-theme-gray placeholder:text-theme-gray bg-white rounded-xl h-[50px] py-2 px-4 mb-6 focus:outline-2 focus:outline-theme focus:border-transparent'/>
        <label for="file" className='relative h-[200px] block border border-theme-gray rounded-10 cursor-pointer'>
           <input type="file" id='file' className='absolute hidden h-[100%] inset-0 w-full placeholder:text-base border border-theme-gray placeholder:text-theme-gray bg-white rounded-xl py-2 px-4 focus:outline-2 focus:outline-theme focus:border-transparent'/>
           <div className='flex flex-col justify-center items-center h-[100%]'>
            <img src={cloud} alt="cloud-img"/>
            <span className='text-base font-semibold text-black'>Drag & drop a file to import</span>
           </div>
        </label>
        <button type='submit' className='bg-theme w-full mt-12 text-white rounded-[5px]  py-3 px-6 text-sm font-bold block border transition-all ease-linear duration-150 border-theme hover:bg-transparent hover:text-theme'>Save Item</button>
        </form>

      </div>
    </div>
    </div>
    </>
  )
}

export default ManageItems