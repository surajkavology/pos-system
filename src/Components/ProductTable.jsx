import React, { useState } from 'react'
import ProductImg from '../assets/Images/product.png'

const ProductTable = () => {

  const [productData, setProductData] = useState([
    {
      orderNumber: "#ORD130",
      product: "iPhone 15 Pro Max",
      productImg: ProductImg,
      productColor: "256GB, Gray",
      price: "$1,199.00",
      time: "Thu, 23 May 2024",
    },
    {
      orderNumber: "#ORD131",
      product: "iPhone 15 Pro Max",
      productImg: ProductImg,
      productColor: "512GB, Silver",
      price: "$1,299.00",
      time: "Fri, 24 May 2024",
    },
    {
      orderNumber: "#ORD131",
      product: "iPhone 15 Pro Max",
      productImg: ProductImg,
      productColor: "512GB, Silver",
      price: "$1,299.00",
      time: "Fri, 24 May 2024",
    },
    {
      orderNumber: "#ORD131",
      product: "iPhone 15 Pro Max",
      productImg: ProductImg,
      productColor: "512GB, Silver",
      price: "$1,299.00",
      time: "Fri, 24 May 2024",
    },
    {
      orderNumber: "#ORD131",
      product: "iPhone 15 Pro Max",
      productImg: ProductImg,
      productColor: "512GB, Silver",
      price: "$1,299.00",
      time: "Fri, 24 May 2024",
    },
    {
      orderNumber: "#ORD131",
      product: "iPhone 15 Pro Max",
      productImg: ProductImg,
      productColor: "512GB, Silver",
      price: "$1,299.00",
      time: "Fri, 24 May 2024",
    },
  ]);

  return (
    <div className="bg-white p-6 pb-20 shadow-lg rounded-lg">
  {/* Wrapper for horizontal scrolling */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse min-w-[650px] md:table">
      {/* Table Header */}
      <thead>
        <tr className="bg-[#f8f8f8] text-theme-gray text-left text-base">
          <th className="py-3 px-4 text-base font-medium">ID <i className="ri-arrow-up-down-line font-light"></i></th>
          <th className="py-3 px-4 text-base font-medium">Product Name <i className="ri-arrow-up-down-line font-light"></i></th>
          <th className="py-3 px-4 text-base font-medium">Price <i className="ri-arrow-up-down-line font-light"></i></th>
          <th className="py-3 px-4 text-base font-medium">Time <i className="ri-arrow-up-down-line font-light"></i></th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {productData.map((product, index) => (
          <tr key={index} className="border-b-2 hover:bg-gray-50 hidden md:table-row">
            <td className="py-4 px-4 font-bold text-black">{product.orderNumber}</td>
            <td className="py-4 px-4 flex items-center space-x-3">
              <img src={product.productImg} alt="Product" className="w-12 h-12 rounded-lg"/>
              <div>
                <p className="font-bold text-black">{product.product}</p>
                <p className="text-gray-500 text-sm">{product.productColor}</p>
              </div>
            </td>
            <td className="py-4 px-4 font-bold text-black">{product.price}</td>
            <td className="py-4 px-4 text-gray-600">{product.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile View - Card Style */}
  <div className="md:hidden space-y-4">
    {productData.map((product, index) => (
      <div key={index} className="bg-white p-4 shadow rounded-lg border">
        <div className="flex items-center space-x-4">
          <img src={product.productImg} alt="Product" className="w-16 h-16 rounded-lg"/>
          <div>
            <p className="font-bold text-black">{product.product}</p>
            <p className="text-gray-500 text-sm">{product.productColor}</p>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-sm"><span className="font-bold">ID:</span> {product.orderNumber}</p>
          <p className="text-sm"><span className="font-bold">Price:</span> {product.price}</p>
          <p className="text-sm"><span className="font-bold">Time:</span> {product.time}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default ProductTable
