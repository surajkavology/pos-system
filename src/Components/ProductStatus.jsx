import React from 'react'

const ProductStatus = ({productData}) => {
  return (
    <>
     <div className="bg-white shadow-lg rounded-lg p-6 w-full">
      {/* Top Section */}
      <div className="flex items-center justify-between pb-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/60" alt="Product Image" className="w-16 h-16 rounded-lg"/>
          <div>
            <p className="text-lg font-bold">iPhone 15 Pro Max</p>
            <p className="text-gray-500 text-sm">256GB, Gray</p>
          </div>
        </div>
        <p className="font-bold">#ORD130</p>
        <p className="font-bold">$1,199.00</p>
        <p className="text-gray-600">12:30 PM, Thu, 23 May 2024</p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center pt-4">
        <p className="text-sm">
          Number of items: <span className="font-bold">2</span>
        </p>
        <p className="text-sm text-red-500 font-bold">Pending</p>
        <p className="text-sm text-gray-600">
          Customer: <span className="text-black font-medium">Johan</span>
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
    </>
  )
}

export default ProductStatus