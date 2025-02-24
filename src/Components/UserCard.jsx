import React from 'react'
import userImage from '../assets/Images/user-img.png'

const UserCard = () => {
  return (
    <>
        <div className='user-card flex flex-wrap gap-3 items-center'>
            <img src={userImage} alt="user-img"  className='size-[80px]'/>
            <div>
              <h4 className='text-xl font-bold text-black'>Welcome, Gorry</h4>
              <p className='text-base text-black'>Thursday, Jun 6, 2024</p>
            </div>
        </div>
    </>
  )
}

export default UserCard