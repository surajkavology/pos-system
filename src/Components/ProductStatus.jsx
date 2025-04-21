import React from 'react'
import productImg from '../assets/Images/product.png'
const ProductStatus = ({productData}) => {
  return (
    <>
     <div className="bg-white shadow-lg rounded-lg p-6 pb-14 w-full">
      {/* Top Section */}
      <div className="flex items-center justify-between pb-4 border-b">
        <div className="flex items-center space-x-4">
          <img src={productImg} alt="Product Image" className="w-16 h-16 rounded-lg"/>
          <div>
            <p className="text-lg font-bold">iPhone 15 Pro Max</p>
            <p className="text-theme-gray font-semibold text-base">256GB, Gray</p>
          </div>
        </div>
        <p className="font-bold">#ORD130</p>
        <p className="font-bold">$1,199.00</p>
        <p className="font-bold">12:30 PM, Thu, 23 May 2024</p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center border-b">
        <p className="text-base font-bold">
          Number of items: <span className="font-bold text-theme-gray">2</span>
        </p>
        <p className="text-base text-red-500 font-bold">Pending</p>
        <p className="text-base font-semibold">
          Customer: <span className="font-semibold text-theme-gray">Johan</span>
        </p>
        <button className="bg-red-600 text-white text-lg font-semibold px-4 py-2 rounded-[5px] border-2 border-red-600 cursor-pointer transition-all ease-linear duration-150  hover:bg-transparent hover:text-red-600">
          Cancel
        </button>
      </div>
    </div>
    </>
  )
}

export default ProductStatus